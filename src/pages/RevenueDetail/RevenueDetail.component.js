import React from 'react';
import Menu from '../../components/Menu/index';
import { revenueDetailActions } from './RevenueDetail.action';
import TableWrapper from '../../globalstyles.js';
import RevenueDetailTableWrapper from './styled';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class RevenueDetailComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.search = this.search();
  }

  startDateChange(startDate) {
    this.setState({
      startDate: startDate
    });
  }

  endDateChange(endDate) {
    this.setState({
      endDate: endDate
    });
  }
  search () {
    const{start, end} = this.state;
    console.log(this.state);
  }
  
   componentDidMount() {
     let id = this.props.match.params.id;
     let revenueDetail = revenueDetailActions.getRevenueById(id);
     this.setState({data: revenueDetail});
   }
  render() {
    let { data, startDate, endDate } = this.state;
    return (
      <div>
        <Menu></Menu>
        <h2>{data.company} - Revenue</h2>
        <div>
          <DatePicker selected={startDate} onChange={this.startDateChange}/>
          <DatePicker selected={endDate} onChange={this.endDateChange}/>
          <button onClick={this.search}>Search</button>
        </div>
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
