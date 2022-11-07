import axios from "axios"

const apiUrl = 'http://localhost:8080'

export default axios.create({
    baseURL: apiUrl,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})