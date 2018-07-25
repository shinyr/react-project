import React from 'react';
import './css/style.css';
import { revenueActions } from './Revenue.action';
import Menu from '../../components/Menu/index';
class RevenueComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
          }
    }

    componentDidMount () {
        console.log('componentDidMount');
        var revenueData = revenueActions.getAllRevenue();
        console.log('revenueData',revenueData);
        this.setState({data: revenueData });
    }
    render() {
        console.log('render',this.state);
        let {data} = this.state;
        return (
            <div>
                <Menu></Menu>
                 <table>
                    <thead>
                        <tr>
                            <td>Company Name </td>
                            <td> Total Revenue </td>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                data.revenue && data.revenue.map((rev, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{rev.company}</td>
                                            <td>{rev.revenue}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table> 
            </div>
        );
    }
}

export { RevenueComp as default };