import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../../logo.png';

function Sidebar(props) {
  const navigate = useNavigate();
  return (
    <SidebarBox>
      <LogoBox>
        <LogoImg src={Logo} alt='Nothing Here' onClick={() => navigate("/Pages")}/>
      </LogoBox>
      <ThreadContainer>
          <Thredx onClick={() => navigate("/Pages/freeBoard/1")}>
            자유게시판  
          </Thredx>
          <Thredx className="threadx" onClick={() => navigate("/Pages/fileShare/1")}>
            자료저장소
          </Thredx>
      </ThreadContainer>
      <Footer onClick={() => navigate("/")}/>
    </SidebarBox>
  )
}

export default Sidebar;

const SidebarBox = styled.aside`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #565254;
  padding: 0.25rem;
`;

const LogoBox = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ThreadContainer = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  overflow: auto;
  flex-grow: 1;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Thredx = styled.div`
  margin-bottom: 0.5rem;
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  font-size: 0.75rem;
`;

const Footer = styled.div`
  height: 6rem;
  width: 100%;
  background-color: black;
`;