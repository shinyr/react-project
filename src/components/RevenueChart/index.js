import { Chart } from "react-google-charts";
import React from "react";
import {loginRevenueActions} from '../../pages/Home/Home.action';

const options = {
    title: "Company Revenue Chart",
    hAxis: { title: "Company", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Revenue", viewWindow: { min: 0, max: 15 } },
    legend: "none"
  };

  var data = loginRevenueActions.getAllRevenue();

  export default function RevenueChart() {
    return (
        <Chart
            chartType="BarChart"
            data={data}
            options={options}
            width="80%"
            height="400px"
            legendToggle
        />
    );
}
