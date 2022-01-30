import { environment } from '../../../environments/environment';

export const APP_CONFIG: any = {
  BASE_API_LINK: {
    BASE: environment.url,
    PRICE_ENGINE:  environment.url + '/order-book?symbol=BTCUSDT',
  },
};
