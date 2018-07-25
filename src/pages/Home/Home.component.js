import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from './styled';

import Menu from '../../components/Menu/index';  

class HomeComp extends React.Component{
  constructor(props){
    super(props);
  }
componentDidMount(){

}

  render(){
    return(
      <div>
        <Menu> </Menu>
        <ContentWrapper>
          <ContentWrapper.Header> <p>Hello <b>{this.props.login.uname}</b> </p></ContentWrapper.Header>
          <ContentWrapper.ContentContainer>
            <h1> Dashboard </h1>
            
          </ContentWrapper.ContentContainer>  
        </ContentWrapper>
      </div> 
    );
  }
}

// HomeComp.propTypes = {
//   home: PropTypes.string.isRequired,
// };

export { HomeComp as default };
