import { Label } from "../../../../commons/inputs/commons/styles";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import ContentsButton from "../../../../commons/inputs/component/button/button.container";
import Recruitment from "./recruitement/recruitement.container";
import { useContext } from "react";
import { ProjectContext } from "../projectNew.container";
import Addbox from "./addbox/addbox.container";

const SelectStyle = styled.select`
    width: 142px;
    border:1px solid #999;
    color:#999;
    font-size: 13px;
    padding: 13px 9px;
    border-radius: 5px;
    margin-right: 8px;
    appearance: none;
    background: url("../img/select.svg") no-repeat right 9px center;
    &:last-child{
        margin-right: 0;
    }
`

const SelectAddBox = styled.div`
   display: flex;
   justify-content: space-between;
`

const SelectAddStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const RecruitmentBox = styled.div`
    margin-top: 30px;
    border-top:1px solid #999;
    border-bottom:1px solid #999;
    padding: 10px 0;
`

const SelectWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

interface IPropsPositionMap {
    label: string,
    optionList?:string[]
    addBox: boolean
}


export default function PositionSelect(props: IPropsPositionMap) {
    const {
        position,
        onClickPositionAdd,
        handleSelect2,
        selected2
    } = useContext(ProjectContext)
    return (
        <>
            <Label>{props.label}</Label>
            <SelectWrapper>
                <SelectAddStyle>
                    <SelectAddBox>
                        <SelectStyle
                            onChange={handleSelect2}
                            className="position"
                            value={selected2}
                        >
                            {
                                props.optionList &&
                                props.optionList.map((el: any) => {
                                    return <option id={el.id} value={el.name} key={uuidv4()}>
                                        {el.name}
                                    </option>
                                })
                            }
                        </SelectStyle>
                        <Addbox />
                        <ContentsButton
                            btnvalue="추가"
                            onClickEvent={onClickPositionAdd}
                        />
                    </SelectAddBox>
                    {
                        props.addBox &&
                        position && position.length > 0 &&
                        <RecruitmentBox>
                            {
                                position.map((el: string, index: number) => {
                                    return <Recruitment
                                        key={uuidv4()}
                                        el={el}
                                        index={index}
                                    />
                                })
                            }
                        </RecruitmentBox>
                    }
                </SelectAddStyle>
            </SelectWrapper>
        </>
    )
}