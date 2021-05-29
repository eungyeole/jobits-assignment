import styled from '@emotion/styled'
export const Wrapper = styled.div`
    box-shadow: black;
    width: calc( 100% / 3 - 30px );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    height: 250px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`
export const CardTitle = styled.div`
    font-size: 13px;
    font-weight: bold;
`
export const CardCreatedAt = styled.div`
    margin-top: 10px;
    font-size: 12px;
`
