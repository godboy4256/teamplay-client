import { createContext, useState } from "react";
import RecruitUI from "./recruit.presenter";
import { IPropsRecruitContext } from "./recruit.types";

export const RecruitContext = createContext<IPropsRecruitContext>({})

export default function Recruit() {
    // const [area, setArea] = useState(0)
    const [isSearchBar, setIsSearchBar] = useState(false)

    const onClickSearchImg = () => {            
        setIsSearchBar((prev) => !prev)
    }

    const onClickSearchfilter = () => {}

    const value = {
        isSearchBar,
        onClickSearchImg,
        onClickSearchfilter
    }

    return (
        <RecruitContext.Provider value={value}>
           <RecruitUI/>
        </RecruitContext.Provider>
    )
}
