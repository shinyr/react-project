import React from 'react';
import TableWrapper from '../../globalstyles';
import ContentWrapper from './styled';
import { loginRevenueActions } from './Home.action';

import Menu from '../../components/Menu/index'; 
import {revOptions,chartData} from '../../components/Revenue/index'; 
import BarChart from '../../components/BarChart/index';

class HomeComp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    var revenueData = loginRevenueActions.getAllRevenue();
    this.setState({data: revenueData });
  }


  render(){
    let {data} = this.state;
    return(
      <div>
         <Menu selected ={"dashboard"} /> 
        <ContentWrapper>
          <ContentWrapper.Header>
              <ul>
                <p>Hello <b>{this.props.login.uname}</b> </p>
                <li><a href="/"> Logout </a></li>
              </ul>               
          </ContentWrapper.Header>
          <ContentWrapper.ContentContainer>
            <h1> Dashboard </h1>
            <ContentWrapper.ChartWrapper>
               <ContentWrapper.ChartContainer>
                 <BarChart options={revOptions} data={chartData()} />
               </ContentWrapper.ChartContainer>
            </ContentWrapper.ChartWrapper>
            <ContentWrapper.TableConatiner>
              <TableWrapper>
                <h1> Company Revenue</h1>
                  <table>
                    <thead>
                      <tr>
                        <th> Company Name </th>
                        <th> Revenue </th>
                      </tr>  
                    </thead>
                    <tbody>
                      {
                        data.revenue && data.revenue.map((rev, index) => {
                          return(
                            <tr key={index}>
                                <td>{rev.company}</td>
                                <td>$ {rev.revenue}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
              </TableWrapper>
            </ContentWrapper.TableConatiner>
          </ContentWrapper.ContentContainer>  
        </ContentWrapper>
      </div> 
    );
  }
}
>>>>>>> develop


export { HomeComp as default };
