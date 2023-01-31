import styled from "styled-components";

const AppColors = {
  primary: '#03001C',
  secondary: '#301E67',
  alert: '#5B8FB9',
  danger: '#B6EADA'
}


export const NavigationHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2vw;
  align-items: center;
  background: ${AppColors.alert};
`;

export const AppTitle = styled.h1`
font-size: 2rem;
color: ${AppColors.danger};`;

export const NavButton = styled.a`
font-size: 1.2rem;
transition: 0.2s ease-in-out;
:hover{
  text-shadow: 0 0 10px #fff;
  cursor: pointer;
}`;
