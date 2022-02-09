import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../service/api';

const DashboardCard = () => {
    const [display, setdisplay] = useState('none');
    const currentDate = new Date();

    const todayDate = `${currentDate.getFullYear()}-${currentDate.getMonth() > 9 ? currentDate.getMonth() : `0${currentDate.getMonth() + 1}`}-${currentDate.getDate() > 9 ? currentDate.getDate() : `0${currentDate.getDate()}`}`;

    const [date, setdate] = useState(todayDate);

    const {id} = useParams();

    useEffect(() => {
        const main = async () => {
            const res = await getUser(id);
            console.log(res.data.tag);
            if(res.data.tag === 'admin'){
                setdisplay('block');
            }
        }
        main();
    }, []);


    return <div className='dashboard-bottom'>
        <div className="top">
            <label htmlFor="date">Date : </label>
            <input type="date" value={date} onChange={(e) => setdate(e.target.value)} id='date' />
        </div>
        <div style={{display: display}} className="edit-btn">
            <a href="/edit"><button>Edit</button></a>
        </div>
    </div>;
};

export default DashboardCard;