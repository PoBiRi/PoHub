import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../../testLogo.png';

function Sidebar(props) {
  const navigate = useNavigate();

  return (
    <SidebarBox>
      <LogoBox onClick={() => navigate("/Pages")}>
        <LogoImg src={Logo} alt='Nothing Here'/>
        <SiteName>PoHub</SiteName>
      </LogoBox>
      <ThreadContainer>
        <Thredx onClick={() => navigate("/Pages/freeBoard/1")}>
          자유게시판  
        </Thredx>
        <Thredx onClick={() => navigate("/Pages/fileShare/1")}>
          자료저장소
        </Thredx>
      </ThreadContainer>
      <Footer onClick={() => navigate("/")}/>
    </SidebarBox>
  )
}

export default Sidebar;

//#565254
const SidebarBox = styled.aside`
  width: 200px;
  height: calc(100% - 16px);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: #565254;
  padding: 8px;
`;

const LogoBox = styled.div`
  display: flex;
  margin-bottom: 32px;
  height: 64px;
  width: 100%;
`;

const LogoImg = styled.img`
  height: 100%;
  object-fit: contain;
`;

const SiteName = styled.div`
  font-size: 32px;
  margin-left: 16px;
  line-height: 64px;
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
  margin-bottom: 16px;
  height: 16px;
  width: 100%;
  line-height: 16px;
  font-size: 16px;
`;

const Footer = styled.div`
  height: 6rem;
  width: 100%;
  background-color: black;
`;