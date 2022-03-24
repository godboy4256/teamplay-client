import { MouseEvent, MouseEventHandler, useState } from "react";
import ProfileDetailUI from "./detail/profileDetail.presenter";
import ProfileUI from "./profile.presenter";

export default function Profile(){
    const [isVisible, setIsvisible] = useState<string | null>("About me")

    const onClickProfileDetail = (e:MouseEvent<HTMLSpanElement>) => { 
        setIsvisible(e?.currentTarget?.textContent)
    }

    return (
        <div>
            <ProfileUI
                isVisible={isVisible}
                onClickProfileDetail={onClickProfileDetail}
            />
            <ProfileDetailUI
                isVisible={isVisible}
            />
        </div>
        
    )
}