import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export default axios.create({
    baseURL: 'https://intense-oasis-88289.herokuapp.com',
    headers: headers 
})

