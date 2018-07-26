import styled from 'styled-components';

const LoginWrapper = styled.form`
    height: 100vh;
    width: 100vw;
`;

const LoginBgContainer = styled.section`
    height: 100vh;
    width: 70%;
    background: #000;
    float: left;
    margin:-8px 0px -8px -8px;
`;

const LoginContainer = styled.section`
    width: 30%;
    height: 100%;
    float: left;
    padding: 80px 20px;
    box-sizing: border-box;
    position: relative;
    p{
        margin-bottom: 5px;
    }
    input{
        padding: 5px 15px;
        width: 80%;
    }
    button{
        padding: 5px 15px;
        margin-top: 50px;
        position: absolute;
        left: 45%;
        transform: translateX(-50%);
        cursor: pointer;
        background: #048e74;
        color: #fff;
        border: 0px;
        border-radius: 4px;
    }
`;

LoginWrapper.LoginBgContainer = LoginBgContainer;
LoginWrapper.LoginContainer = LoginContainer;

export { LoginWrapper as default };
