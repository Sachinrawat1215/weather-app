import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAdmin } from '../service/api';

const AdminRegister = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [warning, setwarning] = useState('');
    const navigate = useNavigate();

    const registerObj = { name, email, password, confirmPassword, tag: 'admin' };

    const regUser = async (e) => {
        e.preventDefault();

        if (name === '') {
            alert('Enter name');
        } else if (email === '') {
            alert('Enter email');
        } else if (password === '') {
            alert('Enter Password');
        } else if (confirmPassword === '') {
            alert('Enter Confirm Password');
        } else if (password !== confirmPassword) {
            alert('Password and confirm password should be same')
        } else {
            console.log(registerObj);
            const res = await registerAdmin(registerObj);
            console.log(res.data.status);
            
            if (res.data.status === 'Already Saved') {
                setwarning('User Already Registered')
            } else if (res.data.status === 'User register') {
                setwarning('Account Created');
                navigate('/admin/login');
            }
        }
    }

    return <div className='login-outer'>
        <div className="login-inner register-form">
            <h2>Admin Register</h2>
            <form onSubmit={regUser}>
                <input type="text" onChange={(e) => setname(e.target.value)} value={name} name="name" placeholder='Full  Name' />
                <input type="email" onChange={(e) => setemail(e.target.value)} value={email} name="email" placeholder='Email Address' />
                <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} name="password" placeholder='Enter Password' />
                <input type="password" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} name="confirmpassword" placeholder='Confirm Password' />
                <p>{warning}</p>
                <input type="submit" value="Register" />
            </form>
            <p>Already User? <a href="/admin/login">Login</a></p>
        </div>
    </div>
};

export default AdminRegister;