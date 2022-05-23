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
    background-color: #c62e65;
    border-radius: 8px;
    a{
      text-decoration: none;
      color: #fff;
      transition: .4s;

      &:hover{
        font-size: 18px;
        text-transform: uppercase;
      }
    }

`; 
