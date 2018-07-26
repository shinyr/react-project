import { Chart } from "react-google-charts";
import React from "react";
import {loginRevenueActions} from '../../pages/Home/Home.action';

const options = {
    title: "Company Revenue Chart",
    hAxis: { title: "Company", viewWindow: { min: 0, max: 5 } },
    vAxis: { title: "Revenue", viewWindow: { min: 0, max: 15 } },
    legend: "none"
  };

  var data = loginRevenueActions.getAllRevenue();
  data.revenue && data.revenue.map((rev) => {
        console.log(rev.revenue , rev.company);
    })


  export default function RevenueChart() {
    return (
        <Chart
            chartType="BarChart"
            data={revenueData}
            options={options}
            width="100%"
            height="300px"
            legendToggle
        />
    );
}
