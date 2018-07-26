import React from 'react';
import TableWrapper from '../../globalstyles';
import ContentWrapper from './styled';
import { loginRevenueActions } from './Home.action';

import Menu from '../../components/Menu/index';  

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
        <Menu> </Menu>
        <ContentWrapper>
          <ContentWrapper.Header> <p>Hello <b>{this.props.login.uname}</b> </p></ContentWrapper.Header>
          <ContentWrapper.ContentContainer>
            <h1> Dashboard </h1>
            <ContentWrapper.ChartWrapper>
               <ContentWrapper.ChartContainer>
                 <RevenueChart></RevenueChart>
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
                                <td>{rev.revenue}</td>
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


export { HomeComp as default };
