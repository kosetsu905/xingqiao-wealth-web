import request from "@/utils/request.js";

export function getEkycReturnUrl(data) {
    return request({
        url: `/system/client/customer/getEkycReturnUrlDemo`,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}