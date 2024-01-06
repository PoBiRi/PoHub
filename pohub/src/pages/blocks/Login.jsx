// 로그인 모듈

import {useRef} from 'react';
import Swal from 'sweetalert2'; /* 알림창 */ 
import Button from './Button';
import styled from 'styled-components';
import {postData} from 'controller/ReqData';

function Login(props) {
    const {setLogin, setBoxType, active} = props;
    
    const idRef = useRef();
    const passwordRef = useRef();

    const hadleEnterDown = (event) => {
      if( event.key === 'Enter'){
        event.preventDefault();
        handleSignInButton();
      }
    };
  
    const handleSignInButton = () => {
      if(!idRef.current.value || !passwordRef.current.value){
        Swal.fire({
          title: 'Error',
          text: 'There is no ID or password',
        });
      } else {
        const loginData = {
          id: idRef.current.value,
          password: passwordRef.current.value,
        };
        setLogin();/* undefined */
        postData('reqLogin', loginData, setLogin);
      };
    };
    
    const handleSignUpButton =() => {
      setBoxType(1);
    };
  
    return (
      <LoginForm onKeyDown={hadleEnterDown} className={active ? '' : 'inactive'}>
        <Lable htmlFor='id'>
          ID
        </Lable>
        <Input id="id" ref={idRef} placeholder="Enter your ID" type="text"/>
        <Lable htmlFor="password">
          PASSWORD
        </Lable>
        <Input id="password" ref={passwordRef} placeholder="Enter your password" type="password"/>
        <div>
          <ButtonBox>
            <Button $color='#f59e0b' $hovercolor='#d97706' onClick={handleSignInButton}>
              Sign In
            </Button>
          </ButtonBox>
          <ButtonBox>
            <Button $color='#4CAF50' $hovercolor='#45a049' onClick={handleSignUpButton}>
              Sign up
            </Button>
            <Button $color='#f44336' $hovercolor='#d32f2f'>
              Forgot password?
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