import { Chart } from "react-google-charts";
import React from "react";
import RevenueChart from '../RevenueChart/index';

console.log("options",this.options);
export default function BarChart() {
        return (
            <Chart
                chartType="BarChart"
                data={this.chartData}
                options={this.options}
                width="100%"
                height="300px"
            />
        );
    }