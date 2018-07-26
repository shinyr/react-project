import { revenueDetailService } from './RevenueDetail.service';

export const revenueDetailActions = {
    getRevenueById
}

export function getRevenueById (id) {
    return revenueDetailService.getRevenueById(id);
}