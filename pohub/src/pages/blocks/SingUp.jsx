// 회원가입 모듈

import {useRef} from 'react';
import Button from './Button';
import styled from 'styled-components';

function SignUp(props) {
  const {setBoxType, active} = props;

  const idRef = useRef();
  const emailRef = useRef();
  const verifyRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  const hadleEnterDown = (event) => {
    if( event.key === 'Enter'){
      event.preventDefault();
      handleSignUpButton();
    }
  };

  const handleSignUpButton = () => {
    setBoxType(0);
  };

  return (
    <SignUpForm onKeyDown={hadleEnterDown} className={active ? '' : 'inactive'}>
      <Lable htmlFor='signUpID'>
        ID
      </Lable>
      <InputButtonBox>
        <Input style={{width:'100%', marginRight:'4px'}} id="signUpID" ref={idRef} placeholder="ID" type="text"/>
        <Button style={{width:'50%', height:'25px'}} $color='#f59e0b' $padding='5px' $hovercolor='#d97706'>
          Confirm
        </Button>
      </InputButtonBox>
      <Lable htmlFor='E-mail'>
        E-mail
      </Lable>
      <InputButtonBox>
        <Input style={{width:'100%', marginRight:'4px'}} id="email" ref={emailRef} placeholder="E-mail" type="text"/>
        <Button style={{width:'50%', height:'25px'}} $color='#f59e0b' $padding='5px' $hovercolor='#d97706'>
          Send
        </Button>
      </InputButtonBox>
      <InputButtonBox>
        <Input style={{width:'100%', marginRight:'4px'}} id="verify" ref={verifyRef} placeholder="Verify Code" type="text"/>
        <Button style={{width:'50%', height:'25px'}} $color='#f59e0b' $padding='5px' $hovercolor='#d97706'>
          Verify
        </Button>
      </InputButtonBox>
      <Lable htmlFor="signUpPassword">
        PASSWORD
      </Lable>
      <Input id="signUpPassword" ref={passwordRef} placeholder="Password" type="password"/>
      <Input id="passwordCheck" ref={passwordCheckRef} placeholder="Check Password" type="password"/>
      <Button style={{marginTop: '4px'}} $color='#f59e0b' $padding='5px' $hovercolor='#d97706' onClick={handleSignUpButton}>
        Sign Up
      </Button>
    </SignUpForm>
  )
}

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  &.inactive {
    display: none;
  }
`;

const InputButtonBox = styled.div`
  display: flex;
  align-items: center;
`;
const Lable = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #4b5563;
`;

const Input = styled.input`
  margin: 4px 0;
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

export default SignUp;