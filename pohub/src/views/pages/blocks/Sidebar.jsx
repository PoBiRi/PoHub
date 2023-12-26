import '../../style/Sidebar.css';
import Logo from '../../../logo.png';
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div className="logo-box">
        <img src={Logo} alt='Nothing Here' onClick={() => navigate("/")}/>
      </div>
      <div className="thread-container">
        <div className="thread-box">
          <div className="threadx" onClick={() => navigate("/Pages/freeBoard/1")}>
            자유게시판  
          </div>
          <div className="threadx" onClick={() => navigate("/Pages/fileShare/1")}>
            자료저장소
          </div>
        </div>
      </div>
      <div className="footer" onClick={() => navigate("/Login")}/>
    </aside>
  )
}

export default Sidebar;
