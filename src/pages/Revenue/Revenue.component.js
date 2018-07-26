import React from 'react';
import { revenueActions } from './Revenue.action';
import Menu from '../../components/Menu/index';
import TableWrapper from '../../globalstyles.js';
import RevenueTableWrapper from './styled';
class RevenueComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
          }
    }

    componentDidMount () {
        var revenueData = revenueActions.getAllRevenue();
        this.setState({data: revenueData });
    }
    render() {
        let {data} = this.state;
        return (
            <div>
                <Menu></Menu>
                <RevenueTableWrapper>
                <TableWrapper>
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
                </TableWrapper>
                </RevenueTableWrapper>
            </div>
        );
    }
}

export { RevenueComp as default };