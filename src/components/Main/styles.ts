import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    ul{
      margin: 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }
  }
`;
