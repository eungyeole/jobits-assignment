import { GetServerSidePropsContext, NextPage } from "next";
import recruitmentAPI from '../libs/api/recruitment'
import { IRecruitmentReponse } from '../libs/interfaces'
import PageNationTable from '../components/PageNationTable/PageNationTable'
import MainContainer from "../components/common/MainContainer/MainContainer";
import SideBar from "../components/SideBar/SideBar";
import styled from '@emotion/styled'
import PageNationNavigator from '../components/PageNationNavigator/PageNationNavigator'
export const getServerSideProps = async (context : GetServerSidePropsContext)  => {
    const page = context.query.page ? parseInt(context.query.page.toString()) : 1
    const { data } = await recruitmentAPI.getPage(page)
    console.log(data);
    return {
        props: {
            page : page,
            data : data
        }
    };
}
interface PageProps {
    data : IRecruitmentReponse
    page : number
}


const Home: NextPage<PageProps> = ({data, page}) => {
    return(
        <>
            <SideBar></SideBar>
            <MainContainer>
                <Wrapper>
                  <PageNationTable data={data.data}></PageNationTable>
                  <PageNationNavigator page={page} maxPage={data.maxPage}></PageNationNavigator>
                </Wrapper>
            </MainContainer>
        </>
    )
}


export default Home;


const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: end;
    flex-direction: column;
    justify-content: center;
    & h3{
        font-weight: 100;
        margin-left: 15px;
    }
    
`