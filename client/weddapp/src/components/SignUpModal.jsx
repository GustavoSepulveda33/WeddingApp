


import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "../components/SignUpModal.css";



function SignUpModal ({ onClose }) {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submittedData, setSubmittedData] = useState(null); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit activated');
        const data = {fullName, email, password};
        setSubmittedData(data);

        setFullName('');
        setEmail('');
        setPassword('');


    };

    const handleModalClose = () => {
      onClose();
    };


    const checkStatus = () => {

        console.log(submittedData);
    }



    const addUser = () => {
        const addToDB = async () => {
          try {
            if (submittedData !== null) {
              console.log(submittedData);
              const res = await axios.post('http://localhost:8000/signUp', {
                userName: submittedData.fullName,
                userEmail: submittedData.email,
                userPassword: submittedData.password,
              });
      
              console.log(res);
            } else {
              console.log('No submitted data available');
            }
          } catch (err) {
            console.log(err);
          }
        };
      
        addToDB();
      };


    useEffect(() => {
      if (submittedData !== null) {
        addUser();
      }
    }, [submittedData]);


    return (
        <div>
            <div className="signUP modal">
              
                {/* <div className="modal">
                  <button onClick={handleModalClose}>Close</button>
                </div> */}

                <form className="signUpForm" id="formID" onSubmit={handleSubmit}>

                    <div className="inputContainer">

                        <div className="formInputs">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="fname" 
                                placeholder="Full Name" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required/>
                        </div>

                        <div className="formInputs">
                            <div className="empass">
                                <label htmlFor="name">Email:</label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>

                                <label htmlFor="name">Password:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    className="pass" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required/>
                            </div>
                        </div>

                    </div>

                    <button className='submitBTN' type='submit'>Sign Up</button>


                </form>
                <button onClick={handleModalClose}>Close</button>
            </div>

            <button onClick={() => checkStatus()}>Check Status</button>

        </div>
    )


}

export default SignUpModal;