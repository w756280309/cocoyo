import axios from 'axios'

import {apiUrl} from '../../config/base'
import {getToken} from '../../plugins/auth/auth'
import {Message, MessageBox} from "element-ui";

export const http = axios.create({
    baseURL : apiUrl,
})

http.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            config.headers['Authorization'] = token.token_type + ' ' + token.access_token
        }

        return config;
    }
)

http.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const status = response.status
        const res = response.data
        if ([200, 201, 204].indexOf(status) !== -1) {
            return response.data
        }
        if ([422].indexOf(status) !== -1) {
            console.log(res)
            return Promise.reject(res)
        }
        if ([400, 404, 429, 403].indexOf(status) !== -1) {
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(res.message)
        }
        if ([401].indexOf(status) !== -1) {
            window.User = '';
            return Promise.reject(res.message)
        }

    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
        get() {
            return http
        },
    })
}