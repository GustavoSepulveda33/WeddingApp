




import React from 'react';
import { useState, useRef } from 'react';
import {useNavigate} from "react-router-dom";
import SignUpModal from '../components/SignUpModal';
import "./Header.css";


function Header() {

    const navigate = useNavigate();
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const modalRef = useRef(null);

    const handleSignUp = () => {
        setShowSignUpModal((prevShowModal) => !prevShowModal);
      };

    const handleCloseModal = () => {
        setShowSignUpModal(false);
      };

    return (
        <div>

            <header>

                {/* <div className="logo" onclick={() => navigate("/")}></div> */}
                <nav>
                    <ul className="nav-bar">
                        <li className="nav-item" onClick={() => navigate("/")}>home</li>
                        <li className="nav-item" onClick={() => navigate("/Products")}>events</li>
                        <li className="nav-item" onClick={handleSignUp}>Sign Up</li>
                    </ul>
                </nav>

            </header>

            {showSignUpModal && <SignUpModal onClose={handleCloseModal} />}

        </div>
    )
}

export default Header


