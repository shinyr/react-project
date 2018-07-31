import React from 'react';

import MenuWrapper from './styled';

export default function Menu({selected}) {
    console.log("selected" ,selected);
    return (
        <MenuWrapper>
           <MenuWrapper.MenuWrapperList>
               <MenuWrapper.MenuList active = {selected == "dashboard"} > 
                   <MenuWrapper.MenuItem href="/home"> Dashboard </MenuWrapper.MenuItem> 
                </MenuWrapper.MenuList>
               <MenuWrapper.MenuList> 
                   <MenuWrapper.MenuItem href="/"> Revenue </MenuWrapper.MenuItem>
               </MenuWrapper.MenuList>
           </MenuWrapper.MenuWrapperList>
        </MenuWrapper>
    );
}