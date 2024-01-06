import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import Logo from 'testLogo.png';

function Sidebar(props) {
  const {sidebarToggle} = props;
  const navigate = useNavigate();
  const location = useLocation();
  
  const isSidebarToggle = (sidebarToggle) => {
    if (sidebarToggle === true) {
      return 'active';
    } else if (sidebarToggle === false) {
      return 'inactive';
    } else {
      return '';
    }
  };

  return (
    <SidebarBox>
      <LogoBox onClick={() => navigate("/Pages")}>
        <LogoImg src={Logo} alt='Nothing Here' className={isSidebarToggle(sidebarToggle)}/>
        <TextBox fontSize='32px' marginleft='20px' className={isSidebarToggle(sidebarToggle)}>PoHub</TextBox>
      </LogoBox>
      <ThreadContainer>
        <Thredx onClick={() => navigate("/Pages/freeBoard/1")}>
          <IconContiner className={isSidebarToggle(sidebarToggle)}>
            <ToggleIcon isToggle={location.pathname.includes('freeBoard')}/>
          </IconContiner>
          <TextBox fontSize='16px' marginleft='12px' className={isSidebarToggle(sidebarToggle)}>자유게시판</TextBox>
        </Thredx>
        <Thredx onClick={() => navigate("/Pages/fileShare/1")}>
          <IconContiner className={isSidebarToggle(sidebarToggle)}>
            <ToggleIcon isToggle={location.pathname.includes('fileShare')}/>
          </IconContiner>
          <TextBox fontSize='16px' marginleft='12px' className={isSidebarToggle(sidebarToggle)}>자료저장소</TextBox>
        </Thredx>
      </ThreadContainer>
      <Footer onClick={() => navigate("/") } className={isSidebarToggle(sidebarToggle)}>
        Nothing Here
      </Footer>
    </SidebarBox>
  )
}

export default Sidebar;

const ToggleIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="feather feather-toggle-right">
        <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
        <circle cx={props.isToggle ? '16' : '8'} cy="12" r="3"></circle>
      </svg>
  )
}

//#565254
const SidebarBox = styled.aside`
  width: 200px;
  height: calc(100% - 16px);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: #FFF0F5;
  padding: 8px;
`;

const LogoBox = styled.div`
  display: flex;
  margin-bottom: 32px;
  height: 64px;
  width: 100%;
  align-items: center;
`;

const fadeInImg = keyframes`
  0% { transform: translateX(144px);}
  100% {transform: translateX(0);}
`;

const fadeOutImg = keyframes`
  0% {transform: translateX(0);}
  100% {transform: translateX(144px);}
`;

const LogoImg = styled.img`
  transform: translateX(144px);
  height: 100%;
  object-fit: contain;
  z-index: 1;

  &.active {
    animation: ${fadeInImg} 0.3s forwards ease-in-out;
  }
  &.inactive {
    animation: ${fadeOutImg} 0.3s forwards ease-in-out;
  }
`;

const fadeInText = keyframes`
  0% { transform: translateX(144px);}
  100% {transform: translateX(0);}
`;

const fadeOutText = keyframes`
  0% {transform: translateX(0);}
  100% {transform: translateX(144px);}
`;

const TextBox = styled.div`
  transform: translateX(144px);
  font-size: ${props => props.fontSize};
  margin-left: ${props => props.marginleft};

  &.active {
    animation: ${fadeInText} 0.3s forwards ease-in-out;
  }
  &.inactive {
    animation: ${fadeOutText} 0.3s forwards ease-in-out;
  }
`;

const ThreadContainer = styled.div`
  flex: 1;
  margin-bottom: 32px;
  overflow: auto;
  flex-grow: 1;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const fadeInIcon = keyframes`
  0% { transform: translateX(144px); width: 48px; height: 48px;}
  100% {transform: translateX(0); width:24px; height: 24px;}
`;

const fadeOutIcon = keyframes`
  0% {transform: translateX(0); width:24px; height: 24px;}
  100% {transform: translateX(144px); width: 48px; height: 48px;}
`;

const IconContiner = styled.div`
  transform: translateX(144px);
  display: flex;
  height: 48px;
  width: 48px;

  &.active {
    animation: ${fadeInIcon} 0.3s forwards ease-in-out;
  }
  &.inactive {
    animation: ${fadeOutIcon} 0.3s forwards ease-in-out;
  }
`;

const Thredx = styled.div`
  display: flex;
  margin: 0 0 16px 8px;
  align-items: center;
`;

const fadeInFooter = keyframes`
  0% { transform: translateX(-144px);}
  100% {transform: translateX(0);}
`;

const fadeOutFooter = keyframes`
  0% {transform: translateX(0);}
  100% {transform: translateX(-144px);}
`;

const Footer = styled.div`
  transform: translateX(-144px);
  height: 6rem;
  width: 100%;

  &.active {
    animation: ${fadeInFooter} 0.3s forwards ease-in-out;
  }
  &.inactive {
    animation: ${fadeOutFooter} 0.3s forwards ease-in-out;
  }
`;