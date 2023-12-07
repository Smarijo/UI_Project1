import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function ProfileButton() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/profiles");
    }

    return (
        <>
            <profile-button type="submit" onClick={handleClick}>
                <IoPersonCircle />
                </profile-button>
        </>
    )
};

export default ProfileButton;