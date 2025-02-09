// 회원가입 모듈

import {useRef, useState, useEffect } from 'react';
import Button from './Button';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import {postData} from 'controller/ReqData';

function FindPassword(props) {
  const {setBoxType, active} = props;
  const [isIDFlag, setIsIDFlag] = useState();
  const [isMailFlag, setIsMailFlag] = useState(0);
  const [isVerifyFlag, setIsVerifyFlag] = useState();

  const idRef = useRef();
  const emailRef = useRef();
  const verifyRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  useEffect(() => {
    if(isIDFlag === false){
      Swal.fire({
        title: 'Error',
        text: 'ID is already Exist',
      }).then(function() {
        setIsIDFlag();
      });
    }

    if(isMailFlag === false){
      Swal.fire({
        title: 'Error',
        text: 'E-mail is already Exist',
      }).then(function() {
        setIsMailFlag();
      });
    }
    
    if(isVerifyFlag === false){
      Swal.fire({
        title: 'Error',
        text: 'Code is not Collect',
      }).then(function() {
        setIsVerifyFlag();
      });
    }
  // eslint-disable-next-line
  },[isMailFlag, isIDFlag, isVerifyFlag]);

  const hadleEnterDown = (event) => {
    if( event.key === 'Enter'){
      event.preventDefault();
      handleSignUpButton();
    }
  };

  const handleSignUpButton = () => {
    if(!passwordRef.current.value || !isIDFlag || !isMailFlag || !isVerifyFlag){
      Swal.fire({
        title: 'Error',
        text: 'Something Wrong',
      });
    } else if(passwordRef.current.value !== passwordCheckRef.current.value){
      Swal.fire({
        title: 'Error',
        text: 'Passwords are not Same',
      });
    } else {
      const userData = {
        id: idRef.current.value,
        email: emailRef.current.value,
        pw: passwordRef.current.value,
      };
      postData('singUpNew', userData);
      window.location.reload(true);
    }
  };

  const handleConfirmButton = () => {
    if(!idRef.current.value){
      Swal.fire({
        title: 'Error',
        text: 'There is no ID',
      });
    } else {
      const idData = {
        id: idRef.current.value,
      };
      postData('checkID', idData, setIsIDFlag);
    };
  }

  const handleSendButton = () => {
    if(!emailRef.current.value){
      Swal.fire({
        title: 'Error',
        text: 'There is no Mail Address',
      });
    } else if(!emailRef.current.value.includes('@')) {
      Swal.fire({
        title: 'Error',
        text: 'This is not Mail Address',
      });
    } else {
      const mailData = {
        email: emailRef.current.value,
      };
      setIsMailFlag(true);
      postData('sendVerifyCode', mailData, setIsMailFlag);
    };
  };

  const handleVerifyButton = () => {
    if(!verifyRef.current.value){
      Swal.fire({
        title: 'Error',
        text: 'There is no Code',
      });
    } else {
      const verifyData = {
        verifyCode: verifyRef.current.value,
      };
      postData('checkVerifyCode', verifyData, setIsVerifyFlag);
    };
  };

  const handleBackButton = () => {
    idRef.current.value = "";
    emailRef.current.value = "";
    verifyRef.current.value = "";
    passwordRef.current.value = "";
    passwordCheckRef.current.value = "";
    
    setBoxType(0);
    setIsIDFlag();
    setIsMailFlag();
    setIsVerifyFlag();
  }

  return (
    <SignUpForm onKeyDown={hadleEnterDown} className={active ? '' : 'inactive'}>
      <Lable htmlFor='signUpID'>
        ID
      </Lable>
      <InputButtonBox>
        <Input 
          style={{width:'100%', marginRight:'4px'}} 
          id="signUpID" 
          ref={idRef} 
          placeholder="ID" 
          type="text"
          disabled={isIDFlag}
        />
        <Button 
          style={{width:'50%', height:'25px'}}  
          $padding='5px' 
          $color={isIDFlag ? '#45a049' : '#f59e0b'} 
          $hovercolor={isIDFlag ? '#45a049' : '#d97706'}
          onClick={handleConfirmButton}
          disabled={isIDFlag}
        >
          {isIDFlag ? <span>Confirm</span> : <span>Confirm</span>}
        </Button>
      </InputButtonBox>
      <Lable htmlFor='email'>
        E-mail
      </Lable>
      <InputButtonBox>
        <Input 
          style={{width:'100%', marginRight:'4px'}} 
          id="email" 
          ref={emailRef} 
          placeholder="E-mail" 
          type="text"
          disabled={isMailFlag}
        />
        <Button 
          style={{width:'50%', height:'25px'}} 
          $color={isMailFlag ? '#45a049' : '#f59e0b'} 
          $hovercolor={isMailFlag ? '#45a049' : '#d97706'}
          $padding='5px' 
          onClick={handleSendButton}
          disabled={isMailFlag}
        >
          Send
        </Button>
      </InputButtonBox>
      <InputButtonBox>
        <Input 
          style={{width:'100%', marginRight:'4px'}} 
          id="verify" 
          ref={verifyRef} 
          placeholder="Verify Code" 
          type="text"
          disabled={isVerifyFlag}
        />
        <Button 
          style={{width:'50%', height:'25px'}}
          disabled={isVerifyFlag}
          $color={isVerifyFlag ? '#45a049' : '#f59e0b'} 
          $padding='5px' 
          $hovercolor={isVerifyFlag ? '#45a049' : '#d97706'}
          onClick={handleVerifyButton}
        >
          {isVerifyFlag ? <span>Verified</span> : <span>Verify</span>}
        </Button>
      </InputButtonBox>
      <Lable htmlFor="signUpPassword">
        PASSWORD
      </Lable>
      <Input id="signUpPassword" ref={passwordRef} placeholder="Password" type="password"/>
      <Input id="passwordCheck" ref={passwordCheckRef} placeholder="Check Password" type="password"/>
      <ButtonBox>
        <Button $color='#f44336'  $padding='5px' $hovercolor='#d32f2f' onClick={handleBackButton}>
          Back
        </Button>
        <Button style={{marginLeft: '4px'}} $color='#f59e0b' $padding='5px' $hovercolor='#d97706' onClick={handleSignUpButton}>
          Sign Up
        </Button>
      </ButtonBox>
    </SignUpForm>
  )
}

const ButtonBox = styled.div`
  display: flex;
  hegith:100%;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

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

export default FindPassword;