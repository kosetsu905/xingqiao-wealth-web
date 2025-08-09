// src/api/file.js
import request from '@/utils/request'

// 上传文件到OSS
export function uploadFile(data) {
    return request({
        url: '/file/oss/upload',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
