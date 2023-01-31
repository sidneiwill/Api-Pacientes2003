import styled from 'styled-components';

const AppColors = {
  primary: '#03001C',
  secondary: '#301E67',
  alert: '#5B8FB9',
  danger: '#B6EADA'
}

export const Container = styled.header`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: ${AppColors.primary};
  min-height: 10vh;
  font-size: calc(10px + 1vmin);
  color: white;
  padding: 0 2vw;
  `;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  border: none;
  padding: 0 10px;
  font-size: 1.5rem;
  width: 100px;
  `;

export const ControlButton = styled.button`
  border-radius: 0;
  border-style: none;
  width: 2vw;
  height: 4vh;
  transition: 0.2s ease-in-out;
  :hover{
    cursor: pointer;
    background-color: #aaa;
  }
  `;

export const ControlButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

export const InfoBox = styled.div`
`;

export const PacientName = styled.h1`
  font-size: 1.5rem;
  border-bottom: 1px solid #fff;
`;	
export const PacientAge = styled.span`
  font-size: 1rem;`