import styled from 'styled-components';

const TableWrapper = styled.section`
    width: 40%;
    float: left;
    padding: 20px;
    box-sizing: border-box;
    h1{
        text-align: center;
    }
    table{
        width:100%;
        border-collapse: collapse;
        thead tr{ background :#ccc !important;}
        th,td{ padding:10px;}
        th:first-child,
        td:first-child{
            text-align: left;
        }
        th:last-child,
        td:last-child{
            text-align: right;
        }
        tr:nth-child(even) {background: #CCC}
        tr:nth-child(odd) {background: #FFF}
    }
`;

export { TableWrapper as default }; 