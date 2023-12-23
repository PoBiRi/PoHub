import { useNavigate } from "react-router-dom";

function ToNF(props) {
    const navigate = useNavigate();
    navigate("/NotFound");
}