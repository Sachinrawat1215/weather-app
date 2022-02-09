import React, { useState } from 'react';
import EditCard from './EditCard';

const EditCards = () => {

    const timeObject = [
        {
            time: "1 AM",
            Season: 'sunny',
            min: '',
            max: ''
        },
        {
            time: "4 AM",
            Season: 'sunny',
            min: '',
            max: ''
        },
        {
            time: "7 AM",
            Season: 'sunny',
            min: '',
            max: ''
        },
        {
            time: "10 AM",
            Season: 'sunny',
            min: '',
            max: ''
        },
        {
            time: "1 PM",
            Season: 'sunny',
            min: '',
            max: ''
        },
        {
            time: "4 PM",
            Season: 'sunny',
            min: '',
            max: ''
        },
        {
            time: "7 PM",
            Season: 'sunny',
            min: '',
            max: ''
        },
        {
            time: "10 PM",
            Season: 'sunny',
            min: '',
            max: ''
        }
    ]

    const [timeObj, settimeObj] = useState(timeObject);

    return <div className='cards-container'>
        {timeObj.map((element, index) => {
            return <EditCard key={index} index={index} props={element} setTimeObj={settimeObj} />;
        })}
        {/* <EditCard title={'1 AM'} />
        <EditCard title={'4 AM'} />
        <EditCard title={'7 AM'} />
        <EditCard title={'10 AM'} />
        <EditCard title={'1 PM'} />
        <EditCard title={'4 PM'} />
        <EditCard title={'1 AM'} />
        <EditCard title={'1 AM'} /> */}

        {/* <div className='card-container'>
            <h4>1 AM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div>

        <div className='card-container'>
            <h4>4 AM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div>

        <div className='card-container'>
            <h4>7 AM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div>

        <div className='card-container'>
            <h4>10 AM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div>

        <div className='card-container'>
            <h4>1 PM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div>

        <div className='card-container'>
            <h4>4 PM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div>

        <div className='card-container'>
            <h4>7 PM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div>

        <div className='card-container'>
            <h4>10 PM</h4>
            <select name="weather" id="weather">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rain">Rain</option>
            </select>
            <input type="number" placeholder='Minimum' />
            <input type="number" placeholder='Miximum' />
        </div> */}
    </div>;
};

export default EditCards;
