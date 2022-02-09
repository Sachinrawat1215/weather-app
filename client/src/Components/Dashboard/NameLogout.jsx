import React, { useEffect, useState } from 'react';
import { getUser, logoutUser } from '../../service/api';
import { useParams, useNavigate } from 'react-router-dom';

const NameLogout = () => {
    const [name, setname] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const main = async () => {
            const res = await getUser(id);
            if (res === 'Failed To Run Authentication') {
                navigate('/login');
            }else if(res.status === 200){
                const userData = res.data.name;
                console.log('this also runs')
                setname(userData);
            }
        }
        main();
    }, []);

    const logout = async () => {
        const res = await logoutUser();
        if(res.data.status === 'okay'){
            navigate('/login');
        }
    }

    return <div className='name-login-outer'>
        <div className="name">
            <h2>Hi, {name}</h2>
        </div>
        <div className="logout" onClick={logout}>
            <img src="../Images/logout.png" alt="" />
            <h2>Logout</h2>
        </div>
    </div>
};

export default NameLogout;