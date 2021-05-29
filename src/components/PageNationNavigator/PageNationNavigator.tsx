import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import * as S from './styles'
import PageNextButton from '../PageNextButton/PageNextButton'
import PagePrevButton from '../PagePrevButton/PagePrevButton'
import { paging } from '../../libs/func/paging'
interface PageNationNavigatorProps{
    page : number
    maxPage : number
}
const PageNationNavigator : FC<PageNationNavigatorProps> = ({page, maxPage}) => {
    const [pageArr, setPageArr] = useState<number[]>([]);
    const router = useRouter()
    function pageSelect(page){
        router.push(`?page=${page}`)
    }
    useEffect(()=>{
        setPageArr(paging(maxPage, page))
    },[page])
    return(
        <S.Wrapper>
            <PagePrevButton page={page} />
            {
                pageArr.map((i,index)=>(
                    <button key={index} onClick={()=>pageSelect(i)} className={page===i ? 'active' : null}>
                        {i}
                    </button> 
                ))
            }
            <PageNextButton page={page} />
        </S.Wrapper>
    )
}
export default PageNationNavigator