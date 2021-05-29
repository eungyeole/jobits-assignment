import request from '../axios'
export default {
    getScroll(page : number) {
        return request({
            url : `/scroll?page=${page}`,
            method: 'get',
        })
    },
    getPage(page : number){
        return request({
            url : `/page?page=${page}`,
            method : 'get'
        })
    }
}