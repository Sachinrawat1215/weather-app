import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../service/api';

const AdminLogin = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [warning, setwarning] = useState('');
    const navigate = useNavigate();

    const loginObj = { email, password };

    const login = async (e) => {
        e.preventDefault();

        if (email === '') {
            alert('Enter Email Address');
        } else if (password === '') {
            alert('Enter Password');
        } else {
            const res = await loginAdmin(loginObj);
            console.log(res.data._id);
            if (res.data.status === 'Not Admin') {
                setwarning("Your don't have admin account");
            } else if (res.data.status === 'User not found') {
                setwarning('Email not registered')
            } else if (res.data.status === 'Wrong Password') {
                setwarning('Wrong Password');
            } else {
                navigate(`/dashboard/${res.data._id}`);
            }
        }
    };

    return <div className='login-outer'>
        <div className="login-inner">
            <h2>Admin Login</h2>
            <form onSubmit={login}>
                <input type="text" onChange={(e) => setemail(e.target.value)} value={email} name="email" placeholder='Email Address' />
                <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} name="password" placeholder='Enter Password' />
                <p className="warning wrong">{warning}</p>
                <input type="submit" value="Login" />
            </form>
            <p>New User? <a href="/admin/register">Create Account</a></p>
        </div>
    </div>
};

export default AdminLogin;
