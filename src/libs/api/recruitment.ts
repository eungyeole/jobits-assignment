import request from '../axios'
export default {
    getScroll(page : number = 1) {
        return request({
            url : `/scroll?page=${page}`,
            method: 'get',
        })
    }
}