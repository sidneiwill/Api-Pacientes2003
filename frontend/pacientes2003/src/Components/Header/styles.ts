import styled from 'styled-components';



export const Container = styled.header`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #282c34;
  min-height: 10vh;
  font-size: calc(10px + 1vmin);
  color: white;
  padding: 0 2vw;
  `;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  `;

export const SearchField = styled.input`
  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }    
  height: 4vh;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  font-size: 1.5rem;
  `;

export const NavigationHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2vw;
  align-items: center;`;

export const AppTitle = styled.h1`
font-size: 2rem;`;

export const NavButton = styled.a`
font-size: 1.2rem;
transition: 0.2s ease-in-out;
:hover{
  text-shadow: 0 0 10px #fff;
  cursor: pointer;
}`;