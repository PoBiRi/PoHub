// 회원가입 모듈

import {useRef, useState, useEffect } from 'react';
import Button from './Button';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import {postData} from 'controller/ReqData';

function FindPassword(props) {
  const {setBoxType, active} = props;
  const [isIDFlag, setIsIDFlag] = useState();
  const [isSendButton, setIsSendButton] = useState(false);
  const [isVerifyFlag, setIsVerifyFlag] = useState();

  const idRef = useRef();
  const verifyRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  useEffect(() => {
    if(isIDFlag === false){
      Swal.fire({
        title: 'Error',
        text: 'There is no ID',
      }).then(function() {
        setIsIDFlag();
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
  },[isIDFlag, isVerifyFlag]);

  const hadleEnterDown = (event) => {
    if( event.key === 'Enter'){
      event.preventDefault();
      handleChangePasswordButton();
    }
  };

  const handleChangePasswordButton = () => {
    if(!passwordRef.current.value || !isIDFlag || !isVerifyFlag){
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
        pw: passwordRef.current.value,
      };
      postData('changePassword', userData);
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
      postData('checkID4Password', idData, setIsIDFlag);
      setIsSendButton(true);
      setTimeout(() => {
        setIsSendButton(false);
      }, 3000);
    };
  }

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
    verifyRef.current.value = "";
    passwordRef.current.value = "";
    passwordCheckRef.current.value = "";
    
    setBoxType(0);
    setIsIDFlag();
    setIsSendButton(false);
    setIsVerifyFlag();
  }

  return (
    <SignUpForm onKeyDown={hadleEnterDown} className={active ? '' : 'inactive'}>
      <Lable htmlFor='checkID'>
        ID
      </Lable>
      <InputButtonBox>
        <Input 
          style={{width:'100%', marginRight:'4px'}} 
          id="checkID" 
          ref={idRef} 
          placeholder="ID" 
          type="text"
          disabled={isSendButton}
        />
        <Button 
          style={{width:'50%', height:'25px'}}  
          $padding='5px' 
          $color={isSendButton ? '#45a049' : '#f59e0b'} 
          $hovercolor={isSendButton ? '#45a049' : '#d97706'}
          onClick={handleConfirmButton}
          disabled={isSendButton}
        >
          {isIDFlag ? <span>Confirm</span> : <span>Confirm</span>}
        </Button>
      </InputButtonBox>
      <InputButtonBox>
        <Input 
          style={{width:'100%', marginRight:'4px'}} 
          id="verify" 
          ref={verifyRef} 
          placeholder="Verify Code" 
          type="text"
          disabled={isVerifyFlag || isIDFlag !== true}
        />
        <Button 
          style={{width:'50%', height:'25px'}}
          disabled={isVerifyFlag || isIDFlag !== true}
          $color={isVerifyFlag ? '#45a049' : '#f59e0b'} 
          $padding='5px' 
          $hovercolor={isVerifyFlag ? '#45a049' : isIDFlag !== true ? '#f59e0b' :'#d97706'}
          onClick={handleVerifyButton}
        >
          {isVerifyFlag ? <span>Verified</span> : <span>Verify</span>}
        </Button>
      </InputButtonBox>
      <Lable htmlFor="newPassword">
        New PASSWORD
      </Lable>
      <Input id="newPassword" ref={passwordRef} placeholder="Password" type="password" disabled={!isVerifyFlag}/>
      <Input id="newPasswordCheck" ref={passwordCheckRef} placeholder="Check Password" type="password" disabled={!isVerifyFlag}/>
      <ButtonBox>
        <Button $color='#f44336'  $padding='5px' $hovercolor='#d32f2f' onClick={handleBackButton}>
          Back
        </Button>
        <Button style={{marginLeft: '4px'}} $color='#f59e0b' $padding='5px' $hovercolor='#d97706' onClick={handleChangePasswordButton}>
          Change Password
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