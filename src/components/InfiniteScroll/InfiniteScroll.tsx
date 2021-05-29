import React, { FC } from "react";
import MainContainer from "../common/MainContainer/MainContainer";
import InfiniteScrollCardList from "../InfiniteScrollCardList/InfiniteScrollCardList";
import * as S from './styles'
const InfiniteScroll : FC = () => {
    return(
        <MainContainer>
            <S.Wrapper >
                <h3>채용의뢰</h3>
                <InfiniteScrollCardList></InfiniteScrollCardList>
            </S.Wrapper>
        </MainContainer>
    )
}
export default InfiniteScroll;