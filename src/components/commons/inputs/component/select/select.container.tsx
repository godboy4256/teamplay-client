import { v4 as uuidv4 } from "uuid";
import { Label } from "../../commons/styles";
import styled from "@emotion/styled";


const SelectStyle = styled.select`
    width: 142px;
    border:1px solid #C4C4C4;
    color:#c4c4c4;
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

const SelectWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const AddLengthStatus = styled.div`
    color: #c4c4c4;
    display: flex;
    align-items: center;
`

const AddLength = styled.span`
    color: #000;
    font-size: 12px;
    font-weight: bold;
`


export default function Select(props: any) {
    return (
        <>
            <Label>{props.label}</Label>
            <SelectWrapper>
                {
                    props.optionList.length > 1 ?
                        props.optionList.map((el: any) => {
                            return <SelectStyle key={uuidv4()}>
                                {
                                    el.map((it: any) => {
                                        return <option value={it} key={uuidv4()}>
                                            {it}
                                        </option>
                                    })
                                }
                            </SelectStyle>
                        }) : props.optionList.length === 1 &&
                        <SelectStyle>
                            {
                                props.optionList[0].map((el: any) => {
                                    return <option value={el} key={uuidv4()}>
                                        {el}
                                    </option>
                                })
                            }
                        </SelectStyle>
                }
                {
                    props.isAddLength && <AddLengthStatus>
                        <span>-</span>
                        <AddLength>1</AddLength>
                        <span>+</span>
                    </AddLengthStatus>
                }
            </SelectWrapper>
        </>
    )
}