import React, {FC, ReactNode} from 'react';
import SideBar from '../SideBar';
import { LayoutContainer, MainContainer, MainWrapper, SidebarContainer } from './Layout.element';

type Props = {
    children?: ReactNode
  }

const Layout:FC<Props> = ({children}) => {
  return (
    <LayoutContainer>
        <SidebarContainer>

      <SideBar/>
        </SidebarContainer>
        <MainContainer>
            <MainWrapper>
                {children}
            </MainWrapper>
        </MainContainer>
    </LayoutContainer>
  );
}

export default Layout;
