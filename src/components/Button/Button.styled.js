import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: violet;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
 
  :hover,
  :focus {
    background-color: green;
  }
`;