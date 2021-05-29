import * as S from './styles'
import Skeleton from "react-loading-skeleton"
const InfiniteScrollCardSkeleton = () => {
    return(
        <S.Wrapper>
            <S.CardTitle>
                <Skeleton height={40} width={300}></Skeleton>
            </S.CardTitle>
            <S.CardCreatedAt>
                <Skeleton height={40} width={300}></Skeleton>
            </S.CardCreatedAt>
        </S.Wrapper>
    )
}
export default InfiniteScrollCardSkeleton;