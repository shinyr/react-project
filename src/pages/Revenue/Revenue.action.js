import { revenueService } from './Revenue.service'
export const revenueActions = {
    getAllRevenue
}

export function getAllRevenue() {
    return revenueService.getAllCompany();
}