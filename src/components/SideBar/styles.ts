import styled from '@emotion/styled'
export const Wrapper = styled.div`
    background: #444444;
    width: 225px;
    height: 100vh;
    & ul{
        padding: 80px 0;
        display: flex;
        flex-direction: column;
        & a{
            color: white;
            display: block;
            padding: 10px 0;
            font-weight: 100;
            text-align: center;
            transition: 0.3s;
        }
        & a:focus, a:hover{
            background: #0f9f0c;
        }
        & a.selected{
            background: #0f9f0c;
        }
    }
    
`