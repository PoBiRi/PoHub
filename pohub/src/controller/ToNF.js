import { useNavigate } from "react-router-dom";

function ToNF() {
    const navigate = useNavigate();
    navigate("/NotFound");
}

export default ToNF;