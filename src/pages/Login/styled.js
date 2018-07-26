import styled from 'styled-components';

const loginMainWrapper = styled.body`
    margin: 0px;
`;

const loginWrapper = styled.form`
    height: 100vh;
    width: 100vw;
`;

const loginBgContainer = styled.section`
    height: 100%;
    width: 70%;
    background: #000;
    float: left;
`;

const loginContainer = styled.section`
    width: 30%;
    height: 100%;
    float: left;
    padding: 80px 20px;
    box-sizing: border-box;
    position: relative;
`;

const loginContainerP = styled.p`
    margin-bottom: 5px;
`;

const loginContainerInput = styled.input`
    padding: 5px 15px;
    width: 80%;
`;

const loginContainerButton = styled.button`
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
`;
loginMainWrapper.loginWrapper = loginWrapper;
loginMainWrapper.loginBgContainer = loginBgContainer;
loginMainWrapper.loginContainer = loginContainer;
loginMainWrapper.loginContainerP = loginContainerP;
loginMainWrapper.loginContainerInput = loginContainerInput;
loginMainWrapper.loginContainerButton = loginContainerButton;

export { loginMainWrapper as default };
