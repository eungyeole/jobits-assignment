import { FC } from "react";
import * as S from './styles'
const PageNationTable : FC = () => {
    return(
        <S.Wrapper>
            <h3>채용의뢰</h3>
            <S.PageNationTableWrapper>
                <thead>
                    <tr>
                        <th>기업명</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>어쩌구 기업</td>
                        <td>등록일</td>
                    </tr>
                  
                </tbody>
            </S.PageNationTableWrapper>
        </S.Wrapper>
    )
}
export default PageNationTable;