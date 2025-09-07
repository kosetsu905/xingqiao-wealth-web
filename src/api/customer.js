// 保存客户信息
import request from "@/utils/request.js";

export function saveKycInfo(data) {
    return request({
        url: '/system/client/customer/saveKycInfo',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function saveClientCustomerInfo(data) {
    return request({
        url: '/system/client/customer/saveClientCustomerInfo',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// 获取kyc客户信息
export function getKycInfo() {
    return request({
        url: `/system/client/customer/getKycInfo`,
        method: 'get'
    })
}

// 获取客户信息
export function getClientCustomerInfo() {
    return request({
        url: `/system/client/customer/getClientCustomerInfo`,
        method: 'get'
    })
}

export function getEkycReturnUrl(data) {
    return request({
        url: `/system/client/customer/getEkycReturnUrl`,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export function getEkycResult() {
    return request({
        url: `/system/client/customer/getEkycResult`,
        method: 'get'
    })
}

