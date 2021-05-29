import styled from '@emotion/styled'
export const Wrapper = styled.div`
    width: 100%;
    max-height: 700px;
    height: 100%;
    padding: 30px 50px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    overflow: scroll;
    & h3{
        margin-bottom: 20px;
    }
`
export const PageNationTableWrapper = styled.table`
    width: 100%;
    & thead{
        & th{
            border-top: 1px solid black;
            padding: 10px 0;
        }
    }
    & tbody{
        & tr{
            & td{
                border-top: 1px solid #eee;
                padding: 10px 50px;
            }
            & td:first-child{
                width: 80%;
                
            }
            &:nth-child(even){
                background: #fcfcfc;
            }
            & td:nth-last-child(1){
                text-align : center
            }
        }
    }
`