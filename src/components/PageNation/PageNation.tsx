import React, { FC } from "react";
import MainContainer from "../common/MainContainer/MainContainer";
import PageNationTable from '../PageNationTable/PageNationTable'
import * as S from './styles'
const PageNation : FC = () => {
    return(
        <MainContainer>
            <S.Wrapper>
                <PageNationTable></PageNationTable>   
            </S.Wrapper>
        </MainContainer>
    )
}
export default PageNation;