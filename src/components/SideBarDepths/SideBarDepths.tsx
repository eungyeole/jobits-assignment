import { FC } from "react";
import { IDepths } from "../../libs/interfaces";
import ActiveLink from "../common/ActiveLink/ActiveLink";

interface SideBarDepthsProps {
    depths : Array<IDepths>
}
const SideBarDepths : FC<SideBarDepthsProps> = ({depths}) =>{
    return(
        <ul>
            {
                depths.map((i, index)=>(
                    <ActiveLink key={index} href={i.href}>
                        <a>{i.name}</a>
                    </ActiveLink>
                ))
            }
        </ul>
    )
}
export default SideBarDepths;