import { FC } from "react";
import * as S from './styles';
import SideBarDepths from '../SideBarDepths/SideBarDepths'
import { depthsinfo } from '../../constances/depths/depthsinfo'
interface SideBarProps {}
const SideBar : FC<SideBarProps> = () => {
    return(
        <S.Wrapper>
            <SideBarDepths depths={depthsinfo}></SideBarDepths>
        </S.Wrapper>
    )
}
;
export default SideBar;