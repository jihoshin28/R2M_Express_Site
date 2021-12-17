import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export default axios.create({
    baseURL: 'http://localhost:3000',
    headers: headers 
})

// baseURL: 'https://bread-basket-backend.herokuapp.com',