import React from 'react';

import MenuWrapper from './styled';

export default function Menu({selected}) {
    return (
        <MenuWrapper>
           <MenuWrapper.MenuWrapperList>
               <img src=".../../../config/assets/logo.png"/>
               <MenuWrapper.MenuList active = {selected == "dashboard"}> 
                   <MenuWrapper.MenuItem href="/home"> Dashboard </MenuWrapper.MenuItem> 
                </MenuWrapper.MenuList>
               <MenuWrapper.MenuList> 
                   <MenuWrapper.MenuItem href="/"> Revenue </MenuWrapper.MenuItem>
               </MenuWrapper.MenuList>
           </MenuWrapper.MenuWrapperList>
        </MenuWrapper>
    );
}