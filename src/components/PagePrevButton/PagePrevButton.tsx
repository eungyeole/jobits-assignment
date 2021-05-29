import { useRouter } from "next/router";
import { FC } from "react"

interface PageNextButtonProps{
    page : number
}
const PagePrevButton : FC<PageNextButtonProps> = ({page}) => {
    const router = useRouter()
    function nextPage(){
        router.push(`?page=${page-1}`)
    }
    return(
        <button onClick={nextPage}>{'<'}</button>
    )
}
export default PagePrevButton;