import styled from 'styled-components';

const RevenueTableWrapper = styled.section`
    width: calc(100% - 200px);
    float:left;
`;

const RevenueTableCol = styled.td`
    cursor: pointer;
    text-decoration: underline;
`;

RevenueTableWrapper.RevenueTableCol = RevenueTableCol;
export {RevenueTableWrapper as default} ;