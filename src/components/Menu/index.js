import React from 'react';

import MenuWrapper from './styled';

export default function Menu() {
    return (
        <MenuWrapper>
           <MenuWrapper.MenuWrapperList>
               <MenuWrapper.MenuList> <MenuWrapper.MenuItem href="/home"> Dashboard </MenuWrapper.MenuItem> </MenuWrapper.MenuList>
               <MenuWrapper.MenuList> <MenuWrapper.MenuItem href="/revenue"> Revenue </MenuWrapper.MenuItem> </MenuWrapper.MenuList>
           </MenuWrapper.MenuWrapperList>
        </MenuWrapper>
    );
}