import request from '@/utils/request'

// 保存客户信息
export function saveCustomerInfo(data) {
    return request({
        url: '/system/agency/customer/save',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// 获取客户信息
export function getCustomerInfo(id) {
    return request({
        url: `/system/agency/customer/info?id=`+id,
        method: 'get'
    })
}

// 更新客户信息
export function updateCustomerInfo(data) {
    return request({
        url: '/system/agency/customer/update',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export function getCustomerList(query) {
    return request({
        url: '/system/agency/customer/list',
        method: 'get',
        params: query
    })
}


//保存意向客户信息
export function createSalesOpportunity(data) {
    return request({
        url: '/system/agency/customer/saveIntention',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// 更新销售机会
export function updateSalesOpportunity(data) {
    return request({
        url: '/system/agency/customer/updateIntention',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export function getSalesOpportunities(query) {
    return request({
        url: '/system/agency/customer/salesList',
        method: 'get',
        params: query
    })
}


export function getSalesOpportunityDetail(id) {
    return request({
        url: `/system/agency/customer/getSalesOpportunityDetail?id=`+id,
        method: 'get'
    })
}


export function deleteSalesOpportunity(id) {
    return request({
        url: `/system/agency/customer/salesDelete?id=`+id,
        method: 'get'
    })
}


export function deleteCustomerInfo(userTempId) {
    return request({
        url: `/system/agency/customer/deleteCustomerInfo?userTempId=`+userTempId,
        method: 'get'
    })
}

