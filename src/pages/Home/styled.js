import styled from 'styled-components';

const ContentWrapper = styled.section`
    width: calc(100vw - 200px);
    height: 100vh;
    float:left;
    margin:-8px -8px -8px 0px;
    background: #F1F3F6;
`;

const Header = styled.header`
    padding: 7px 20px;
    width:100%;
    background: #fff;
    color: #5F5F5F;
    box-sizing: border-box;
    text-align: right;
    ul{
        display :inline-block;
        padding: 0px;
        margin: 0px;
        list-style: none;
        cursor: pointer;
        position : relative;
        li{
            display: none;
            a{ 
                color: #000;
                text-decoration: none;
            }
        }
    }
    ul:hover li{
        display : block;
        position: absolute;
        background: #ccc;
        padding: 10px 15px;
        right: -10px;
    }
`;

const ContentContainer = styled.div`
    padding: 10px;
    h1{
        color: #797F93;
    }
`;

const ChartWrapper = styled.section`
    width: 60%;
    height: 300px;
    float: left;
    padding: 20px;
    box-sizing: border-box;
`;

const ChartContainer = styled.div`
    background : #fff;
    height: 100%;
`;

const TableConatiner = styled.section`
    width:40%;
    float: left;
`;
 
ContentWrapper.Header = Header;
ContentWrapper.ContentContainer = ContentContainer;
ContentWrapper.ChartContainer = ChartContainer;
ContentWrapper.ChartWrapper= ChartWrapper;
ContentWrapper.TableConatiner = TableConatiner;

export { ContentWrapper as default };