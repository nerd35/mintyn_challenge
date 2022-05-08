import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%auto;
  padding: 0px 45px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
`;

export const HeaderColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.img``;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 101px;
`;
export const SearchImg = styled.img``;
export const SearchInput = styled.input`
  font-family: "Segoe UI";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #979797;
  border: none;
  margin-left: 16px;
`;

export const HeaderLink = styled.h1`
font-family: 'Segoe UI';
font-weight: 400;
font-size: 14px;
line-height: 19px;
margin-right: 36.66px;
color: #647787;
`;

export const NotificationImg = styled.img``

export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    margin-left: 40px;
`

export const ProfileGreeting = styled.span`
    font-family: 'Segoe UI';
font-weight: 400;
font-size: 10px;
line-height: 13px;
display: flex;
align-items: flex-end;
text-align: center;
color: #647787;
`
export const ProfileName = styled.span`
    font-family: 'Segoe UI';
font-weight: 400;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: flex-end;
text-align: center;
color: #647787;
`

export const ProfileImg = styled.img`
margin-left: 9px;
margin-right: 20px
`

