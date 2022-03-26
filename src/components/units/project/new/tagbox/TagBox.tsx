import { Fragment, useState } from "react";
import ClickTag from "../../../../commons/tags/commons/clickTag";
import { v4 as uuidv4 } from "uuid";
import { Label } from "../../../../commons/inputs/commons/styles";
import styled from "@emotion/styled";

interface IPropsTagBox{
    list:string[]
    label:string
    checkBox:boolean
}

const ProjectTagArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
`

export default function TagBox(props:IPropsTagBox) {
    const [position, setPosition] = useState("");
    const [interest, setInterest] = useState<string[]>([]);
    const onClickPushTag = (name: string) => () => {
        let temp: string[] = [];
        if(props.checkBox){
            if (interest.includes(name)) {
                temp = interest.filter((el) => el !== name);
                setInterest([...temp]);
            } else {
                setInterest((prev) => [...prev, name]);
            }
        }else{
            if (position === name) setPosition("");
            else setPosition(name)
        }
    }
    return (
        <>
        <Label>{props.label}</Label>
        <ProjectTagArea>
          {props.list.map((name) => (
            <Fragment key={uuidv4()}>
                {
                    props.checkBox ? 
                    <ClickTag
                        name={name}
                        marginBottom={0}
                        isClick={interest && interest.includes(name) && true}
                        onClick={onClickPushTag}
                    /> : 
                    <ClickTag
                        name={name}
                        marginBottom={0}
                        isClick={position && position === name && true}
                        onClick={onClickPushTag}
                    />
                }
            </Fragment>
          ))}
        </ProjectTagArea>
        </>
    );
}
