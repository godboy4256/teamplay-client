import { Label } from "../../../../commons/inputs/commons/styles";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ProjectContext } from "../projectNew.container";

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

export default function LocationSelect(props: IPropsPositionMap) {
    const {
        handleSelect,
        selected,
    } = useContext(ProjectContext)
    return (
        <>
            <Label>{props.label}</Label>
            <SelectWrapper>
                <SelectAddStyle>
                    <SelectAddBox>
                        <SelectStyle
                            onChange={handleSelect}
                            className="position"
                            value={selected}
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
                    </SelectAddBox>
                </SelectAddStyle>
            </SelectWrapper>
        </>
    )
}