import React from 'react';
import styled from 'styled-components';

export const View = styled.div`
  padding: 20px;
  height: calc(100vh - 40px);
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: xx-large;
  font-weight: bold;
`;

export const Content = styled.div`
  font-size: medium;
  color: #6f6f6f;
`;

export const Button = styled.button`
  width: calc(100% - 40px);
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #b771c9;
  color: white;
  position: absolute;
  bottom: 20px;
  font-weight: bold;
`;
