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
          <div className="threadx" onClick={() => navigate("/Pages/freeBoard")}>
            자유게시판  
          </div>
        </div>
      </div>
      <div className="footer" />
    </aside>
  )
}

export default Sidebar;
