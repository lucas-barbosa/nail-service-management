import { Service } from './Service';
import { ServiceOrder } from './ServiceOrder';

export type OrdersPack = {
  id?: string;
  customer: string;
  services?: ServiceOrder[];
  servicesId?: string[];
  servicesCount: {
    service?: Service;
    serviceId: string;
    quantity: number;
  }[];
  price: number;
  startDate: Date;
}
