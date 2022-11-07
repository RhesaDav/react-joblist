import { default as baseApi } from "../api/baseApi"

const getJobList = async() => {
    return await baseApi.get('/jobs')
}

const getJobDetail = async(id) => {
    return await baseApi.get(`/jobs/${id}`)
}

export const jobServices = {
    getJobList,
    getJobDetail
}