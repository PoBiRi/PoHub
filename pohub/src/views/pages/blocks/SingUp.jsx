// 회원가입 모듈

import {useRef} from 'react';
import Button from './Button';
import styled from 'styled-components';

function Login(props) {
    const {setBoxType, active} = props;

    const idRef = useRef();
    const passwordRef = useRef();

    const hadleEnterDown = (event) => {
      if( event.key === 'Enter'){
        event.preventDefault();
        handleSignInButton();
      }
    };
  
    const handleSignInButton = () => {
      setBoxType(0);
    };
  
    return (
      <LoginForm onKeyDown={hadleEnterDown} className={active ? '' : 'inactive'}>
        <Lable htmlFor='signUpID'>
          ID
        </Lable>
        <Input id="signUpID" ref={idRef} placeholder="Enter your ID" type="text"/>
        <Lable htmlFor="signUpPassword">
          PASSWORD
        </Lable>
        <Input id="signUpPassword" ref={passwordRef} placeholder="Enter your password" type="password"/>
        <div>
          <ButtonBox>
            <Button $color='#f59e0b' $hovercolor='#d97706' onClick={handleSignInButton}>
              Sign Up
            </Button>
          </ButtonBox>
        </div>
      </LoginForm>
    )
}

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  &.inactive {
    display: none;
  }
`;

const Lable = styled.label`
  font-size: 0.5rem;
  font-weight: 500;
  color: #4b5563;
`;

const Input = styled.input`
  margin: 0.25rem 0;
  padding: 4px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  placeholder: #9ca3af;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.25);
  }
`;

const ButtonBox = styled.div`
  display: flex;
  hegith:100%;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export default Login;