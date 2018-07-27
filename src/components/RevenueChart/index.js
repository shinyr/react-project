
const options = {
    title: "Company Revenue Chart",
    hAxis: { title: "Revenue($)" , viewWindow: { min: 50, max: 700 } },
    vAxis: { title:"Company" , viewWindow: { min: 0, max: 5 } },
    legend: "none"
};

var data = loginRevenueActions.getAllRevenue();
  let chartData = [["company", "revenue"]];
  data.revenue && data.revenue.map((rev) => {
    chartData.push([rev.company, parseInt(rev.revenue)]);
  })

export default function RevenueChart(){
    return(
        this.options,
        this.chartData
    );
}
