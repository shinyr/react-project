import { Chart } from "react-google-charts";
import React from "react";

export default function BarChart(props) {
        return (
            <Chart
                chartType="BarChart"
                data={props.data}
                options={props.options}
                width="100%"
                height="300px"
            />
        );
    }