import {server,bannersUrl,productsUrl} from '../../boot/server'
import axios from 'axios';
import Iproduct from '../../interfaces/Iproduct';
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
    let response = await axios.get(server+productsUrl)
    if (response.status ==200) {
        let products:Array<Iproduct>=[];
        response.data.forEach((element:any) => {
            let product:Iproduct ={...element };
            products.push(product);
        });
        
        return products;
    }
    else{
        return null;
    }
 } catch (error) {
    
    return null;
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
        
        let product:IProduct = {...res.data};
        let displays=[]
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
    console.log(error)
    return {}
  }
 
}
export  {getBanners,fetchProducts,extractProductData}