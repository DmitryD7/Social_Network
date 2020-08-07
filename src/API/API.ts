import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'e25ce395-7836-43e0-9416-1f8978f20c93'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {},).then(response => response.data)
    }, unFollow(id: number) {
        return instance.delete(`follow/${id}`, {},).then(response => response.data)
    },
}



