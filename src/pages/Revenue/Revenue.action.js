import { revenueService } from './Revenue.service'
export const revenueActions = {
    getAllCompany
}

export function getAllCompany() {
    return revenueService.getAllCompany();
}