import '../style/sidebar.css';
import Logo from '../../logo.png';
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
          <div className="threadx" onClick={() => navigate("/nothing")}/>
          <div className="threadx" />
          <div className="threadx" />
        </div>
      </div>
      <div className="footer" />
    </aside>
  )
}

export default Sidebar;
