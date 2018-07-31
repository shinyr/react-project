import { revenueDetailService } from './RevenueDetail.service';

export const revenueDetailActions = {
    getRevenueById,
    getRevenueByDate
}

export function getRevenueById (id) {
    return revenueDetailService.getRevenueById(id);
}

export function getRevenueByDate (start, end, id) {
    return revenueDetailService.getRevenueByDate( start, end, id);
}