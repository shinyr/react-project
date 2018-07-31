import { loginRevenueService } from './Home.service';

export const loginRevenueActions = {
    getAllRevenue
}

export function getAllRevenue() {
    return loginRevenueService.getAllCompany();
}