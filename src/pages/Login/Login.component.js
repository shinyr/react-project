import React from 'react';
import history from '../../history';
import loginMainWrapper from './styled';

class LoginComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            response: "",
            errorMsg: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.login.msg == "success"){
             nextProps.history.push('/home');

        }else{
            this.setState({errorMsg: nextProps.login.msg})
        }
    }

    handleSubmit(e) {
        const{username, password} = this.state;
        if (username && password) {
            this.props.loginActions.login(username, password);
        }

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const { login } = this.props;
        const { username, password } = this.state;
        // if (login.msg == "success") {
        //     return <Redirect to='/home'/>;
        // }
        return(
            <div>
                <loginMainWrapper.loginWrapper onSubmit={this.handleSubmit}>
                    <loginMainWrapper.loginBgContainer></loginMainWrapper.loginBgContainer>
                    <loginMainWrapper.loginContainer>
                        <loginMainWrapper.loginContainerP> Username</loginMainWrapper.loginContainerP>
                        <loginMainWrapper.loginContainerInput type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange}/>
                        <loginMainWrapper.loginContainerP> Password</loginMainWrapper.loginContainerP>
                        <loginMainWrapper.loginContainerInput type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}/>
                        <loginMainWrapper.loginContainerButton> Login </loginMainWrapper.loginContainerButton>
                    </loginMainWrapper.loginContainer>
                </loginMainWrapper.loginWrapper>
            </div>
        );
    }
}

export { LoginComp as default };