//import { revenueData } from '../../json/revenue.json';

var revenueData = require('../../json/revenue.json');
export const revenueService = {
    getAllCompany
}

export function getAllCompany() {
    return revenueData;
}