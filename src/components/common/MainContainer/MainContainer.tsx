import { FC, ReactNode } from "react";
import * as S from './styles'
interface MainContainerProps{
    children : ReactNode
}
const MainContainer : FC<MainContainerProps> = ({children}) => {
    return(
        <S.Container>
            {children}
        </S.Container>
    )
}
export default MainContainer;