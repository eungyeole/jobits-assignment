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
                    <li key={index}>
                        <ActiveLink href={i.href}>
                            <a>{i.name}</a>
                        </ActiveLink>
                    </li>
                ))
            }
        </ul>
    )
}
export default SideBarDepths;