import {server,bannersUrl} from '../../boot/server'
import axios from 'axios';
async function getBanners():Promise<any> {
   try {
    const bannersResponse = await axios.get(`${server+bannersUrl}`);
    // Extract the banners array from the response
    const banners = bannersResponse.data;

    // Filter out banners where splashscreen is false

    const filteredBanners = banners.filter((banner:any) => banner.home);
    
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
    console.log(error.message)
    return null;
   }
}
export  {getBanners}