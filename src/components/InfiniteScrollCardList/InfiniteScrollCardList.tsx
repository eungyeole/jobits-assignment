import { FC, useEffect, useState } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/useInfiniteScroll";
import InfiniteScrollCard from "../InfiniteScrollCard/InfiniteScrollCard";
import recruitmentAPI from '../../libs/api/recruitment'
import * as S from './styles'
const InfiniteScrollCardList : FC = () => {
    const [scrollRef] = useInfiniteScroll();
    return(
        <S.CardWarpper ref={scrollRef}>
            {
                Array(12).fill(-1).map((i,index)=><InfiniteScrollCard key={index} {...i}></InfiniteScrollCard>)
            }
        </S.CardWarpper>
    )
}
export default InfiniteScrollCardList;