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
    background: url("../images/select.svg") no-repeat right 9px center;
    &:last-child{
        margin-right: 0;
    }
`

const OptionStyle = styled.option`

`


export default function Select(props: any) {
    return (
        <>
            <Label>{props.label}</Label>
            {
                props.optionList.length > 1 ?
                    props.optionList.map((el: any) => {
                        return <SelectStyle key={uuidv4()}>
                            {
                                el.map((it: any) => {
                                    return <OptionStyle value={it} key={uuidv4()}>
                                        {it}
                                    </OptionStyle>
                                })
                            }
                        </SelectStyle>
                    }) : props.optionList.length === 1 &&
                    <SelectStyle>
                        {
                            props.optionList[0].map((el: any) => {
                                return <OptionStyle value={el} key={uuidv4()}>
                                    {el}
                                </OptionStyle>
                            })
                        }
                    </SelectStyle>
            }

        </>
    )
}