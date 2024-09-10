import {server,bannersUrl,productsUrl,viewerUrl} from '../../boot/server'
import axios from 'axios';
import {Iproduct} from '../../interfaces/Iproduct';
import * as CryptoJS from 'crypto-js'
import { syncTime } from '../time';

async function getBanners(isHome:boolean):Promise<any> {
   try {
    const bannersResponse = await axios.get(`${server+bannersUrl}`);
    // Extract the banners array from the response
    const banners = bannersResponse.data;

    // Filter out banners where splashscreen is false
    let filteredBanners:any = {}
    if (isHome) {
        filteredBanners = banners.filter((banner:any) => banner.home);
    } else {
        filteredBanners = banners.filter((banner:any) => banner.splashscreen);
    }
    
    // Create an array of promises to fetch the sub-data for each banner
    const promises = filteredBanners.map((banner:any) => {
        // Fetch the sub-data for each banner using axios.get()
        return axios.get(banner.display);
        });
        
    // Use Promise.all() to wait for all promises to resolve
    const subDataResponses = await Promise.all(promises);
    return filteredBanners.map((banner:any, index:any) => {
        // Get the sub-data response for the current banner
        const subDataResponse = subDataResponses[index];

        // Extract the sub-data from the response
        const subData = subDataResponse.data;

        // Return the banner with the sub-data
        return {'alt':banner['owner'],'src': subData['image'] };
    });
   } catch (error) {
   
    return null;
   }
}
async function fetchProducts():Promise<Array<Iproduct>>{
    
 try {
    let time = await syncTime();
    if (time ==null) {
        return [];
    }
    let response = await axios.get(server+productsUrl)
    if (response.status ==200) {
        let products:Array<Iproduct>=[];
        response.data.forEach((element:any) => {
        
            if (new Date(element.expire_date)>new  Date(time)) {
                let product:Iproduct ={...element };
                products.push(product);
            }
        });
        
        return products;
    }
    else{
        return [] as Iproduct[];;
    }
 } catch (error) {
    
    return [] as Iproduct[];
 }
}
async function createProductViews(product:number,data:any){
    try {
       let digest = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(data)).toString(CryptoJS.enc.Hex);
       var sendData: any = { "veiwer_hash": digest.toString(), "product": product };
       const res = await axios.get(server + viewerUrl + "?search=" + digest.toString());
       
        if (res.status == 200) {
            const numbers = [1, 2, 3, 4, 5, 6];
            const data: Array<any> = res.data;
            const filter = data.filter((element: any) => {
                
                return element.product ==product;
            });
            
            if (filter.length==0) {
                await axios.post(server + viewerUrl, sendData); 
            }
        } else {
        }
    } catch (error) {
        // const res2 = await axios.post(server + viewerUrl, send
        // console.log("error", error)
      
    }
}
async function  getProductViews(product:number):Promise<number>{
    let res =await axios.get(server+"/product-viewer"+"?populate=*");
    let cnt:number=0;
    
    if (res.status==200) {
       for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];
        if (element['product']===product) {
            cnt++;
        }
        
       }   
    }
    return cnt;
}

async function extractProductData(product_id:number):Promise<any> {
 
  try {
    let res = await axios.get(server+productsUrl+"/"+product_id);
    let res1 = await getProductViews(product_id);
    
    if (res.status==200){
        
        let user = await axios.get(res.data.owner.toString());
        if (user.status!=200) {
            console.log("failed")
            return {};
        }
    
        let owner={...user.data};
        
                // Remove sensitive data from owner object
        const sensitiveFields = [
            'password', 'last_login', 'is_reset_password', 'user_permissions', 
            'groups', 'validated', 'is_superuser', 'is_active', 
            'id', 'is_staff', 'date_joined', 'otp', 'username'
        ];
        sensitiveFields.forEach(field => delete owner[field]);
        
        let product:Iproduct = {...res.data,"owner":{...owner}};
        let displays:any[]=[]
        product.display.forEach((element:any) => {
           displays.push({'src':element['image'],'alt':[product.created]})
         });
         
         return {
            product:product,
            viewers:res1,
            displays:displays
        }
    }
    else{
        console.log("failed");
        return {};
    }
  } catch (error) {
    // console.log(error)
    return {}
  }
 
}

export  {getBanners,fetchProducts,extractProductData,createProductViews}