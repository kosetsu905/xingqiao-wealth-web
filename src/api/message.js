import request from "@/utils/request.js";

export function sendInviteMessageBatch(data) {
    return request({
        url: `/message/sendInviteMessageBatch`,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}