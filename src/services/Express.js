import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    AccessControlAllowOrigin: '*'
}

export default axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://intense-oasis-88289.herokuapp.com',
    headers: headers 
})

