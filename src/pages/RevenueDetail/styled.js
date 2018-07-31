import styled from 'styled-components';

const RevenueDetailTableWrapper = styled.section`
    width: calc(100% - 200px);
    float:left;
`;

const DatePickerWrapper = styled.section`
    width: auto;
    height: auto;
    float: left;
    padding: 0px 15px 0px 20px;
    input{
        padding: 5px 15px;
        cursor: pointer;
    }
`;

const Button =  styled.button`
    background: #58AD97;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
`;

RevenueDetailTableWrapper.DatePickerWrapper = DatePickerWrapper;
RevenueDetailTableWrapper.Button = Button;


export {RevenueDetailTableWrapper as default} ;