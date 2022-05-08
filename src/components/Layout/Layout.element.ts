import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const SidebarContainer = styled.div`
position: fixed;
    top: 0;
width: 260px;
height: 100%;
background: #FFFFFF;
z-index: -999;
` 

export const MainContainer = styled.div`
    margin-left: 260px;
overflow: hidden;
`
export const MainWrapper = styled.div`
    padding: 50px;
`
