import React from 'react';
import Header from '../Components/Header';
import NameLogout from '../Components/Dashboard/NameLogout';
import DashboardCard from '../Components/Dashboard/DashboardCard';
import EditCards from '../Components/Dashboard/EditCards';

const EditPage = () => {
    return <div>
        <Header />
        <div className="container">
            <NameLogout />
            <DashboardCard />
            <EditCards />
        </div>
    </div>;
};

export default EditPage;
