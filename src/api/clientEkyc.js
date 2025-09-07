import request from "@/utils/request.js";

export function getEkycReturnUrlDemo(data) {
    return request({
        url: `/system/client/customer/getEkycReturnUrlDemo`,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
