import axios from 'axios';
const URL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const registerUser = async (data) => {
    try {
        return axios.post(`${URL}/user/register`, data);
    } catch (error) {
        console.log('failed to run registerUser', error);
    }
}

const loginUser = async (data) => {
    try {
        return axios.post(`${URL}/user/login`, data);
    } catch (error) {
        console.log('failed to run loginUser', error);
    }
}

const loginAdmin = async (data) => {
    try {
        return axios.post(`${URL}/admin/login`, data);
    } catch (error) {
        console.log('failed to run loginAdmin', error);
    }
}

const registerAdmin = async (data) => {
    try {
        return axios.post(`${URL}/admin/register`, data);
    } catch (error) {
        console.log('failed to run registerAdmin', error);
    }
}

const getUser = async (data) => {
    try {
        return await axios.get(`${URL}/dashboard/${data}`);
    } catch (error) {
        return 'Failed To Run Authentication';
        // console.log('failed to run getUser', error);
    }
}

const logoutUser = async () => {
    try{
        return await axios.get(`${URL}/logout`);
    }catch(error){
        console.log('failed to run logoutUser', error);
    }
}

export { registerUser, loginUser, loginAdmin, registerAdmin, getUser, logoutUser };