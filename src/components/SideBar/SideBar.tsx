import { FC } from "react";
import * as S from './styles';
import SideBarDepths from '../SideBarDepths/SideBarDepths'
interface SideBarProps {}
const depths = [
    {
        href : '/infinite',
        name : '무한 스크롤'
    },
    {
        href : '/page',
        name : '페이지 네이션'
    },
    
] 
const SideBar : FC<SideBarProps> = () => {
    return(
        <S.Wrapper>
            <SideBarDepths depths={depths}></SideBarDepths>
        </S.Wrapper>
    )
}
;
export default SideBar;