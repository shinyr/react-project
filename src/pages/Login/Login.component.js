import React from 'react';
import './css/styles.css';
import {Redirect} from "react-router-dom";
import { persistStore } from 'redux-persist';


class LoginComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            response: "",
            errorMsg: ""
        };
        this.state = { rehydrated: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const opts = {
            whitelist: ['user'] 
        };

        persistStore(this.props.store, opts, () => {
            this.setState({ rehydrated: true });
        });
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.login.msg == "success"){
            // console.log('login success');
            // history.push('/');

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
        if (!this.state.rehydrated) {
            return null;
        }
        const { login } = this.props;
        const { username, password } = this.state;
        if (login.msg == "success") {
            return <Redirect to='/home'/>;
        }
        return(
            <div>
                <form className="loginWrapper" onSubmit={this.handleSubmit}>
                    <section className="loginBgContainer"></section>
                    <section className="loginContainer">
                        <p> Username</p>
                        <input type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange}/>
                        <p> Password</p>
                        <input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}/>
                        <button> Login </button>
                    </section>
                </form>
            </div>
        );
    }
}

export { LoginComp as default };