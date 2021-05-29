import { FC } from 'react';
import { IRecruitmentData } from '../../libs/interfaces';
import * as S from './styles'
interface InfiniteScrollProps extends IRecruitmentData{}
const InfiniteScrollCard : FC<InfiniteScrollProps> = ({name, createdAt}) => {
    return(
        <S.Wrapper>
            <S.CardTitle>{name}</S.CardTitle>
            <S.CardCreatedAt>{createdAt}</S.CardCreatedAt>
        </S.Wrapper>
    )
}
export default InfiniteScrollCard;