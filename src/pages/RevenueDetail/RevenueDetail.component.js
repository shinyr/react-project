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
      data: {},
      startDate: moment(),
      endDate: moment()
    };
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.search = this.search.bind(this);
  }

  startDateChange(startDate) {
    console.log(startDate);
    this.setState({
      startDate: startDate
    });
  }

  endDateChange(endDate) {
    console.log(endDate);
    this.setState({
      endDate: endDate
    });
  }
  search () {
    const{startDate, endDate} = this.state;
    let formattedStart = startDate.format("DD/MM?YYYY");
    let fromattedEnd = endDate.format("DD/MM?YYYY");
    let id = this.props.match.params.id;
    let searchResult = revenueDetailActions.getRevenueByDate(formattedStart, fromattedEnd, id);
    console.log(searchResult);
    this.setState({data: searchResult});

  }
  
   componentDidMount() {
     let id = this.props.match.params.id;
     let revenueDetail = revenueDetailActions.getRevenueById(id);
     console.log(revenueDetail);
     this.setState({data: revenueDetail});
   }
  render() {
    let { data, startDate, endDate } = this.state;
    return (
      <div>
        <Menu></Menu>
        <h2>{data.company} - Revenue</h2>
        <div>
          <RevenueDetailTableWrapper.DatePickerWrapper>
          <DatePicker selected={startDate} onChange={this.startDateChange} dateFormat="DD/MM/YYYY"/>
          </RevenueDetailTableWrapper.DatePickerWrapper>
          <RevenueDetailTableWrapper.DatePickerWrapper>
            <DatePicker selected={endDate} onChange={this.endDateChange} dateFormat="DD/MM/YYYY"/>
          </RevenueDetailTableWrapper.DatePickerWrapper>   
          <RevenueDetailTableWrapper.Button onClick={this.search}>Search</RevenueDetailTableWrapper.Button>
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
