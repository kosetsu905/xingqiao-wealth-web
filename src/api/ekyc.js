import request from '@/utils/request'

export function submitEkycData(data) {

    console.log('请求参数'+String.valueOf(data));
    return request({
        url: '/system/agency/ekyc/submit',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



export function getEkycData() {
    return request({
        url: '/system/agency/ekyc/info',
        method: 'get'
    });
}
