import axios from 'axios'

let adminToken = localStorage.getItem('admin-token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    AccessControlAllowOrigin: '*',
    'Admin-Auth': adminToken
}

export default axios.create({
    baseURL: 'https://intense-oasis-88289.herokuapp.com',
    headers: headers 
})

