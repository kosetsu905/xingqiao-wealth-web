import request from '@/utils/request'

// 获取用户信息
export function getEmployeeInfo() {
    return request({
        url: '/system/agency/employee/getInfo',
        method: 'get'
    })
}


// 上传头像
export function uploadAvatar(data) {
    return request({
        url: '/system/user/uploadAvatar',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
