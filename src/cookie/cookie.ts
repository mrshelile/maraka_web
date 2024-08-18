// cookie.ts
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default {
  install(app: any) {
    app.config.globalProperties.$cookies = cookies;
  }
}