import { FC } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/useInfiniteScroll";
import InfiniteScrollCard from "../InfiniteScrollCard/InfiniteScrollCard";
import InfiniteScrollCardSkeleton from '../InfiniteScrollCard/InfiniteScrollCardSkeleton'
import * as S from './styles'
import { IRecruitmentData } from "../../libs/interfaces";
import recruitment from "../../libs/api/recruitment";

const InfiniteScrollCardList : FC = () => {
    const [scrollRef, data, loading, last] = useInfiniteScroll<IRecruitmentData>(recruitment.getScroll);
    return(
        <S.CardWarpper ref={scrollRef}>
            { data.map((i,index)=><InfiniteScrollCard key={index} {...i}></InfiniteScrollCard>) }
            { !last && loading && Array(12).fill(null).map((_i,index)=><InfiniteScrollCardSkeleton key={index}></InfiniteScrollCardSkeleton>)}
        </S.CardWarpper>
    )
}
export default InfiniteScrollCardList;