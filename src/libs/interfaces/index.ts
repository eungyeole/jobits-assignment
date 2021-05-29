export interface IDepths {
    href : string
    name : string
}
export interface IRecruitmentData{
    name : string
    createdAt : string
}

export interface IRecruitmentReponse{
    data : Array<IRecruitmentData>
    maxPage : number
}