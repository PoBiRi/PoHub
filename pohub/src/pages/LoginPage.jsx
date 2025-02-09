import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
/*import Logo from '../../logo.png';*/
import Logo from 'testLogo.png';
import Swal from 'sweetalert2'; /* 알림창 */ 
import Login from './blocks/Login';
import SignUp from './blocks/SingUp';
import FindPassword from './blocks/FindPassword';

function LoginPage(props) {
  const [sideBoxToggle, setSideBoxToggle] = useState();
  const [login, setLogin] = useState();
  const [boxType, setBoxType] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(login) { navigate('/Pages'); return}
    else if(login === false) {
      Swal.fire({
        title: 'Error',
        text: 'Invalid ID or password',
      });
    }
  // eslint-disable-next-line
  },[login]);

  const openSideBox = () => {
    setSideBoxToggle(!sideBoxToggle);
  };

  return (
    <Container>
      <Box>
        <LogoBox onClick={openSideBox}>
          <Img alt="Logo" src={Logo} />
        </LogoBox>
        <SideBox className={sideBoxToggle ? 'active' : sideBoxToggle === false ? 'inactive' : ''}>
          <Login setLogin = {setLogin} setBoxType = {setBoxType}
          active={boxType === 0 ? true : false} />
          <SignUp setBoxType = {setBoxType}
          active={boxType === 1 ? true : false} />
          <FindPassword setBoxType = {setBoxType}
          active={boxType === 2 ? true : false} />
        </SideBox>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #FFF0F5; 
`;

const Box = styled.div`
  height: 40vh;
  min-height: 250px;
  min-width: 250px;
  display: flex;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  justify-content: center;
`;

const LogoBox = styled.div`
  border-radius: 0.375rem; 
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  z-index: 1;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const fadeIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 250px;
  }
`;
const fadeOut = keyframes`
  0% {
    width: 250px;
  }
  100% {
    width: 0;
  }
`;

const SideBox = styled.div`
  height: 100%;
  width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &.active {
    animation: ${fadeIn} 0.5s forwards ease-in-out;
  }
  &.inactive {
    animation: ${fadeOut} 0.5s forwards ease-in-out;
  }
`;

export default LoginPage;