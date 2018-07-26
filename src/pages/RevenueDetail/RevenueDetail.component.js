import React from 'react';
import Menu from '../../components/Menu/index';
import { revenueDetailActions } from './RevenueDetail.action';
import TableWrapper from '../../globalstyles.js';
import RevenueDetailTableWrapper from './styled';

class RevenueDetailComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
   componentDidMount() {
     let id = this.props.match.params.id;
     let revenueDetail = revenueDetailActions.getRevenueById(id);
     this.setState({data: revenueDetail});
   }
  render() {
    let { data } = this.state;
    return (
      <div>
        <Menu></Menu>
        <h2>{data.company} - Revenue</h2>
        <RevenueDetailTableWrapper>
                    <TableWrapper>
                        <table>
                            <thead>
                                <tr>
                                    <td> Date </td>
                                    <td> Revenue </td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    data.revenue && data.revenue.map((obj) => {
                                        return (
                                            <tr>
                                                <td>{obj.date}</td>
                                                <td>{obj.amount}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </TableWrapper>
                </RevenueDetailTableWrapper>
      </div>
    );
  }
}

export { RevenueDetailComp as default };
