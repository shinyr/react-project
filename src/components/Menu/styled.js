import styled from 'styled-components';

const MenuWrapper = styled.section`
    width: 200px;
    height: 100vh;
    background: #58AD97;
    float: left;
    color: #fff;
    margin: -8px 0px -8px -8px;
`;

const MenuWrapperList = styled.ul`
    padding: 0px;
    list-style: none;
`; 

const MenuList = styled.li`
    background:  ${selected => active ? 'green' : '#58AD97'};
    padding: 10px 40px;
`;

const MenuItem = styled.a`
    color: #fff;
    text-decoration: none;
`;
MenuWrapper.MenuWrapperList = MenuWrapperList;
MenuWrapper.MenuList = MenuList;
MenuWrapper.MenuItem = MenuItem;


export { MenuWrapper as default };