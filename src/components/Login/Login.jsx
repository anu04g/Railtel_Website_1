// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import passwordIcon from '../Assests/password.png';
// import personIcon from '../Assests/person.png';
// import vector1 from '../Assests/Vector (1).png';
// import connect from '../Assests/connect.png';

// const Login = () => {
//     const [action, setAction] = useState("Login");
//     const [username, setUsername] = useState(''); 
//     const [password, setPassword] = useState(''); 
//     const [error, setError] = useState(''); 
//     const navigate = useNavigate(); 

//     useEffect(() => {
//         // Clear any previous login data when the component mounts
//         localStorage.removeItem('isAuthenticated');
//     }, []);

//     const handleLogin = () => {
//         if (username === 'admin' && password === 'admin') {
//             localStorage.setItem('isAuthenticated', 'true');
//             navigate("/Home"); 
//         } else {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <div className='login-page'>
//         <img id="connect" src={connect} alt='connect' />
//         <img id="vector1" src={vector1} alt='Vector1' />
        
//         <div className='logcontainer'>
//             <div className='header'>
//                 <div className='text'>{action}</div>
//                 <div className='underline'></div>
//             </div>
//             <div className='inputs'>
//                 <div className='input'>
//                     <img src={personIcon} alt='Person Icon'/>
//                     <input
//                         type='text'
//                         placeholder='Username'
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div className='input'>
//                     <img src={passwordIcon} alt='Password Icon'/>
//                     <input
//                         type='password'
//                         placeholder='Password'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//             </div>
//             {error && <div className='error-message'>{error}</div>}
//             <div className='forgot-password'>Lost password?<span>Click Here!</span></div>
//             <div className='submit-container'>
//                 <div className={action === 'Login' ? "submit gray" : "submit"} onClick={handleLogin}>
//                     Login
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import passwordIcon from '../Assests/password.png';
import personIcon from '../Assests/person.png';
import vector1 from '../Assests/Vector (1).png';
import connect from '../Assests/connect.png';

const Login = () => {
    const [action, setAction] = useState("Login");
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 

    useEffect(() => {
        // Clear any previous login data when the component mounts
        localStorage.removeItem('isAuthenticated');
    }, []);

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate("/home"); 
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='login-page'>
            <img id="connect" src={connect} alt='connect' />
            <img id="vector1" src={vector1} alt='Vector1' />
            
            <div className='logcontainer'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={personIcon} alt='Person Icon'/>
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='input'>
                        <img src={passwordIcon} alt='Password Icon'/>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {error && <div className='error-message'>{error}</div>}
                <div className='forgot-password'>Lost password?<span>Click Here!</span></div>
                <div className='submit-container'>
                    <div className={action === 'Login' ? "submit gray" : "submit"} onClick={handleLogin}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
