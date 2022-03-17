import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { Label } from "../../commons/styles";
import Tag from "./tag/tag.container";

const TagBoxStyle = styled.div`
    width:100%;
    display: flex;
    flex-wrap:wrap;
    box-sizing: border-box;
    gap:5px 7px;
`

export default function TagCheckBox(props: any) {
    return (
        <>
            <Label>{props.label}</Label>
            <TagBoxStyle>
                {
                    props.tagList.map((el: any) => {
                        return <Tag
                            key={uuidv4()}
                            tagValue={el}
                        />
                    })
                }
            </TagBoxStyle>
        </>
    )
}