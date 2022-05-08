import React from 'react';
import { HeaderColumn, HeaderContainer, HeaderLink, LogoImage, NotificationImg, ProfileGreeting, ProfileImg, ProfileInfoContainer, ProfileName, SearchContainer, SearchImg, SearchInput } from './header.element';
import Logo from '../../assets/TransMonitor.png'
import SearchIcon from '../../assets/Search.png'
import NotificationIcon from "../../assets/notification.png"
import UserIcon from '../../assets/Mask Group.png'

const  Header = () => {
  return (
    <div>
      <HeaderContainer>
          <HeaderColumn>
              <LogoImage src={Logo} alt="logo"/>
              <SearchContainer>
              <SearchImg src={SearchIcon} alt='search'/>
              <SearchInput placeholder='search...' type="text"/>
              </SearchContainer>
          </HeaderColumn>
          <HeaderColumn>
          <HeaderLink>Support</HeaderLink>
          <HeaderLink>FAQ</HeaderLink>
          <NotificationImg src={NotificationIcon} alt='notification' />
          <ProfileInfoContainer>
              <ProfileGreeting>Hello</ProfileGreeting>
              <ProfileName>Oluwaleke Ojo</ProfileName>
          </ProfileInfoContainer>
          <ProfileImg src={UserIcon} alt='user' />
          </HeaderColumn>
      </HeaderContainer>
    </div>
  );
}

export default  Header;
