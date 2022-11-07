import { default as baseApi } from "../api/baseApi"

const loginUser = (data) => {
    return baseApi.post('/users/login', data)
}

const registerUser = (data) => {
    return baseApi.post('/users/register', data)
}

export const authServices = {
    loginUser,
    registerUser
}