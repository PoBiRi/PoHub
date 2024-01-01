// 버튼 모듈

import styled from 'styled-components';

const Button = styled.button`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1;
    padding: 10px;
    background-color: ${props => props.$color};
    color: #fff;
    font-weight: bold;
    border-radius: 0.2rem;
    transition: background-color 0.3s ease;
    border: none;
  
    &:hover {
      background-color: ${props => props.$hovercolor};
    }
  
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }`;

export default Button;