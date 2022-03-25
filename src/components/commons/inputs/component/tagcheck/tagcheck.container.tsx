import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { Label } from "../../commons/styles";
import Tag from "./tag/tag.container";
import { MouseEvent,useState } from "react";

interface ITagCheckBoxProps{
    label : string,
    tagList:Array<string>,
    duplicate : string
}

const TagBoxStyle = styled.div`
    width:100%;
    display: flex;
    flex-wrap:wrap;
    box-sizing: border-box;
    gap:5px 7px;
`

export default function TagCheckBox(props: ITagCheckBoxProps) {
    const [picks,setPicks] = useState<Array<string>>([])
    
    const onClickTagButton = (e:MouseEvent<HTMLButtonElement>) => {
        if(props.duplicate === "중복 불가"){
            for(let i =0;i < document.querySelectorAll(".tag__list").length;i++){
                document.querySelectorAll(".tag__list")[i].classList.remove("active__list")
            }
            e.currentTarget.classList.add("active__list")
            console.log(e.currentTarget.textContent)
        }else if(props.duplicate === "중복 가능"){
            const pick:string | null = e.currentTarget.textContent
            pick && !picks.includes(pick) && setPicks([...picks,pick])
            if(pick && picks.includes(pick)){
               const togglePicks = picks.filter(el => {
                    return el !== pick
                })
               setPicks(togglePicks)
            } 
        }
    }

    return (
        <>
            <Label>{props.label}</Label>
            <TagBoxStyle>
                {
                    props.tagList.map((el:string) => {
                        return <Tag
                            picks={picks}
                            key={uuidv4()}
                            tagValue={el}
                            duplicate={props.duplicate}
                            onClickTagButton={onClickTagButton}
                        />
                    })
                }
            </TagBoxStyle>
        </>
    )
}