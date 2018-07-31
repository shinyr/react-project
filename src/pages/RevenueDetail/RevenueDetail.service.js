var revenueData = require('../../json/revenue.json');
export const revenueDetailService = {
    getRevenueById,
    getRevenueByDate
}

export function getRevenueById(id) {
    let data = revenueData.list.filter(revObj => revObj.id == id);
    return data[0];
}

export function getRevenueByDate(start, end, id) {
    let data = revenueData.list.filter(revObj => revObj.id == id);
    let searchResult = data[0].revenue.filter(revObj => (revObj.date >= start && revObj.date <= end) );
    data[0].revenue = [];
    data[0].revenue = searchResult;
    return data[0];
}