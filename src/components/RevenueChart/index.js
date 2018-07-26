import { Chart } from "react-google-charts";
import React from "react";
import {loginRevenueActions} from '../../pages/Home/Home.action';

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

  export default function RevenueChart() {
    return (
        <Chart
            chartType="BarChart"
            data={chartData}
            options={options}
            width="100%"
            height="300px"
            // legendToggle
        />
    );
}
