var revenueData = require('../../json/revenue.json');
export const revenueDetailService = {
    getRevenueById
}

export function getRevenueById(id) {
    let data = revenueData.list.filter(revObj => revObj.id == id);
    return data[0];
}