import { BsFillHouseFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './House.css'

function House() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }


    return (
        <button3 onClick={handleClick}>
        <BsFillHouseFill />
        </button3>
    );
  };

  export default House;