import { FC, useEffect, useState } from "react";
import recruitment from "../../libs/api/recruitment";
import { IRecruitmentData } from "../../libs/interfaces";
import * as S from './styles'
interface PageNationTable {
    data : Array<IRecruitmentData>
}
const PageNationTable : FC<PageNationTable> = ({data}) => {
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
                    {
                        data.map((i,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{i.name}</td>
                                    <td>{i.createdAt}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </S.PageNationTableWrapper>
        </S.Wrapper>
    )
}
export default PageNationTable;