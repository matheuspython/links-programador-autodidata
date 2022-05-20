import styled from 'styled-components';

export const Container = styled.li`

    list-style-type: none;
    width: 100%;
    max-width: 450px;
    height: 35px;
    display: flex;  
    justify-content: center;
    align-items: center;
    gap: 9px;
    background-color: ${theme => theme.theme.colors.secundary};
    border-radius: 8px;
    a{
      text-decoration: none;
      color: ${theme => theme.theme.colors.text};
      transition: .4s;

      &:hover{
        font-size: 18px;
        text-transform: uppercase;
      }
    }

`; 
