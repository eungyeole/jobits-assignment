import styled from '@emotion/styled'
export const Wrapper = styled.div`
    border: 1px solid #eee;
    border-radius : 5px;
    margin-top: 10px;
    & button {
        background: white;
        border : none;
        border-right: 1px solid #eee;
        padding: 0px 10px;
    }
    & button.active{
       background-color : #009c01;
       color: white;
    }
`
