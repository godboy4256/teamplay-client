import { useState, ChangeEvent, createContext, Dispatch, SetStateAction } from "react";
import ProjectUI from "./projectNew.presenter";
import selectListDummy from '../../../../commons/json/selectList.json'

interface IPropsEl {
    name?: string
    personnel?: number
}


interface IProjectContext {
    position?: IPropsEl[],
    selected?: string,
    setPosition?: Dispatch<SetStateAction<{}[]>>
    setSelected?: Dispatch<SetStateAction<string>>
    setPostionInclueds?: Dispatch<SetStateAction<string[]>>
    handleSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
    onClickPositionAdd?: () => void
    postionInclueds?: string[]
    positionAdd?: () => void
    positonMinus?: () => void
    positionCount?: number
}

export const ProjectContext = createContext<IProjectContext>({})

export default function Project() {
    const [positionCount, setPositionCount] = useState(1)
    const positionAdd = () => {
        setPositionCount(prev => prev + 1)
    }

    const positonMinus = () => {
        if (positionCount === 1) return;
        setPositionCount(prev => prev - 1)
    }
    const [selected, setSelected] = useState(String(selectListDummy.selectList.recruitment[0][0]));
    const [postionInclueds, setPostionInclueds] = useState<Array<string>>([])
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };
    const [position, setPosition] = useState<Array<{}>>([])
    const onClickPositionAdd = () => {
        if (!postionInclueds.includes(selected)) {
            setPosition([...position, {
                name: selected,
                personnel: positionCount
            }])
            setPostionInclueds([...postionInclueds, selected])
        } else {
            alert("이미 추가한 포지션입니다.")
        }
    }

    const value = {
        position,
        setPosition,
        selected,
        setSelected,
        handleSelect,
        onClickPositionAdd,
        postionInclueds,
        setPostionInclueds,
        positionAdd,
        positonMinus,
        positionCount
    }

    return (
        <ProjectContext.Provider value={value}>
            <ProjectUI />
        </ProjectContext.Provider>
    )
}