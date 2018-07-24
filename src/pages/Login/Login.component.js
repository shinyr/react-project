import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import './css/styles.css';

class LoginComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        console.log('submitted');
        const{username, password} = this.state;
    }

    handleChange(e) {
        debugger;
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const { username, password } = this.state;
        return(
            <div>
                <h2>{intl.get('menu/login').d('Login')}</h2>
                <form className="loginWrapper" onSubmit={this.handleSubmit}>
                    <section className="loginBgContainer"></section>
                    <section className="loginContainer">
                        <p> Username</p>
                        <input type="text" placeholder="Username" onChange={this.handleChange}/>
                        <p> Password</p>
                        <input type="password" placeholder="Password" onChange={this.handleChange}/>
                        <button> Login </button>
                    </section>
                </form>
            </div>
        );
    }
}

// LoginComp.propTypes = {
//   login: PropTypes.string.isRequired,
// };
// LoginComp.displayName = LoginComp;

export { LoginComp as default };