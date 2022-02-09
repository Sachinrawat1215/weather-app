import React from 'react';
import Cards from '../Components/Dashboard/Cards';
import DashboardCard from '../Components/Dashboard/DashboardCard';
import NameLogout from '../Components/Dashboard/NameLogout';
import Header from '../Components/Header';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <NameLogout />
                <DashboardCard />
                <Cards />
            </div>
        </React.Fragment>
    )
};

export default Dashboard;