import styled from 'styled-components';

export const View = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 100px);
  margin: 20px;
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: xx-large;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const Content = styled.div`
  font-size: medium;
  color: #6f6f6f;
  padding: 5px 0 30px 0;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #b771c9;
  color: white;
  position: absolute;
  bottom: 0;
  font-weight: bold;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
