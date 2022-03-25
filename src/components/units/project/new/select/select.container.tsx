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
    optionList: string[][]
}

interface IPropsEl {
    name?: string
    personnel?: number
}

export default function Select(props: IPropsPositionMap) {
    const {
        position,
        onClickPositionAdd,
        handleSelect,
        selected,
    } = useContext(ProjectContext)
    return (
        <>
            <Label>{props.label}</Label>
            <SelectWrapper>
                {
                    props.optionList.length > 1 ?
                        props.optionList.map((el: any) => {
                            return <SelectStyle
                                key={uuidv4()}
                            >
                                {
                                    el.map((it: any) => {
                                        return <option value={it} key={uuidv4()}>
                                            {it}
                                        </option>
                                    })
                                }
                            </SelectStyle>
                        }) : props.optionList.length === 1 &&
                        <SelectAddStyle>
                            <SelectAddBox>
                                <SelectStyle
                                    onChange={handleSelect}
                                    value={selected}
                                    className="position"
                                >
                                    {
                                        props.optionList[0].map((el: string) => {
                                            return <option value={el} key={uuidv4()}>
                                                {el}
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
                                position && position.length > 0 &&
                                <RecruitmentBox>
                                    {
                                        position.map((el: IPropsEl) => {
                                            return <Recruitment
                                                key={uuidv4()}
                                                el={el}
                                            />
                                        })
                                    }
                                </RecruitmentBox>
                            }
                        </SelectAddStyle>
                }
            </SelectWrapper>
        </>
    )
}