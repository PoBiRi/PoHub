import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import Logo from 'testLogo.png';

function Sidebar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SidebarBox>
      <LogoBox onClick={() => navigate("/Pages")}>
        <LogoImg src={Logo} alt='Nothing Here'/>
        <TextBox fontSize='32px' marginleft='20px'>PoHub</TextBox>
      </LogoBox>
      <ThreadContainer>
        <Thredx onClick={() => navigate("/Pages/freeBoard/1")}>
          <ToggleIcon isToggle={location.pathname.includes('freeBoard')}/>
          <TextBox fontSize='16px' marginleft='12px'>자유게시판</TextBox>
        </Thredx>
        <Thredx onClick={() => navigate("/Pages/fileShare/1")}>
          <ToggleIcon isToggle={location.pathname.includes('fileShare')}/>
          <TextBox fontSize='16px' marginleft='12px'>자료저장소</TextBox>
        </Thredx>
      </ThreadContainer>
      <Footer onClick={() => navigate("/")}>
        Nothing Here
      </Footer>
    </SidebarBox>
  )
}

export default Sidebar;

const ToggleIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
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

const LogoImg = styled.img`
  height: 100%;
  object-fit: contain;
`;

const TextBox = styled.div`
  font-size: ${props => props.fontSize};
  margin-left: ${props => props.marginleft};
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

const Thredx = styled.div`
  display: flex;
  margin: 0 0 16px 8px;
  align-items: center;
`;

const Footer = styled.div`
  height: 6rem;
  width: 100%;
`;