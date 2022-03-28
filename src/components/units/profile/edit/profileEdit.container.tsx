import { useRouter } from "next/router";
import { createContext, useRef, useState } from "react";
import ProfileEditUI from "./profileEdit.presenter";
import { IPropsProfileEditContext } from "./profileEdit.types";

export const ProfileEditContext = createContext<IPropsProfileEditContext>({})

export default function ProfileEdit(){
    const router = useRouter();
    const [tendency, setTendency] = useState<string[]>([])
    const [position, setPosition] = useState<string[]>([])
    const [interest, setInterest] = useState<string[]>([])
    const [technic, setTechnic] = useState<string[]>([])
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleTwo, setIsVisibleTwo] = useState(false)
    const [isVisibleThree, setIsVisibleThree] = useState(false)
    const [isVisibleFour, setIsVisibleFour] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [tag, setTag] = useState("");
    const [area, setArea] = useState(-220);
    // const [isToggle, setIsToggle] = useState(false)
    const tagInputRef = useRef<HTMLInputElement>(null);

    const onClickChangeInput = () => {
        setIsAdd(true)
        tagInputRef.current?.click()
    }

    const onClickPushTag = (name: string) => () => {

        if(tendency){
            if(tendency.includes(name)){
                return;
            }
            if (tendency.length === 3) {
                const temp = tendency;
                temp.shift();
                setTendency([...temp, tag]);
              } else {
                setTendency((prev) => [...prev, tag]);
            }
        }
    }

    const onClickEditTendency = () => {
        if(area === -220){
            setArea(-60)
        } else {
            setArea(-220)
        }
    }

    const onClickEditPosition = () => {
        setIsVisibleTwo(true)
        tagInputRef.current?.click()
    }

    const onClickEditInterest = () => {
        setIsVisibleThree(true)
        tagInputRef.current?.click()
    }

    const onClickEditTechnic = () => {
        setIsVisibleFour(true)
        tagInputRef.current?.click()
    }

    const onClickDeleteTag = (name: string) => () => {
        const temp = tendency.filter((el) => el !== name);
        setTendency([...temp]);
      };

    const onClickBasicInfoEdit = () => {
        router.push('/signup/edit')
    }

    const value = {
        tendency,
        position,
        interest,
        technic,
        isAdd,
        isVisible,
        isVisibleTwo,
        isVisibleThree,
        isVisibleFour,
        area,
        onClickChangeInput,
        onClickPushTag,
        onClickEditTendency,
        onClickEditPosition,
        onClickEditInterest,
        onClickEditTechnic,
        onClickDeleteTag,
        onClickBasicInfoEdit
    }


    return(
        <ProfileEditContext.Provider value={value}>
            <ProfileEditUI/>
        </ProfileEditContext.Provider>
    )
}