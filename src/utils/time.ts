import axios from "axios";
import { server, timeUrl } from "../boot/server";

async function syncTime() {
    try {
      // Fetching time from a trusted NTP server (worldtimeapi.org)
      const response = await axios.get(server+timeUrl);
      const serverTime = new Date(response.data.server_time);

      return serverTime;
    } catch (error) {
      // console.error('Error fetching time from server:', error);
    }
    return null;
  }

  export {syncTime}