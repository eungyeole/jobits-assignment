export function paging(maxPage, page){
    const startPage = (Math.ceil(page/5)-1)*5+1
    const endPage = startPage+4 > maxPage ? maxPage : startPage+4
    const temp = []
    for(let i=startPage;i<=endPage;i++){
        temp.push(i)
    }
    return temp;
}