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
`;

const ContentContainer = styled.div`
    padding: 10px;
    h1{
        color: #797F93;
    }
`;

const ChartWrapper = styled.section`
    width: 40%;
    height: 300px;
    float: left;
    padding: 20px;
`;

const ChartContainer = styled.div`
    background : #fff;
`;

 
ContentWrapper.Header = Header;
ContentWrapper.ContentContainer = ContentContainer;

export { ContentWrapper as default };