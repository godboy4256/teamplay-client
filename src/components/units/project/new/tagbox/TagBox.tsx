import { Dispatch, Fragment, SetStateAction, useState } from "react";
import ClickTag from "../../../../commons/tags/commons/clickTag";
import { v4 as uuidv4 } from "uuid";
import { Label } from "../../../../commons/inputs/commons/styles";
import styled from "@emotion/styled";

interface IPropsTagBox {
    list: any
    label: string
    checkBox: boolean
    setValues?: Dispatch<SetStateAction<string | string[]>>
}


const ProjectTagArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
`

export default function TagBox(props: IPropsTagBox) {
    const [tagValue, setTagValue] = useState("");
    const [interest, setInterest] = useState<string[]>([]);
    const onClickPushTag = (id: string) => () => {
        let temp: string[] = [];
        if (props.checkBox) {
            if (interest.includes(id)) {
                temp = interest.filter((el:string) => el !== id);
                setInterest([...temp]);
            } else {
                setInterest((prev:string[]) => [...prev, id]);
                props.setValues && props.setValues(interest)
            }
        } else {
            if (tagValue === id) {
                setTagValue("");
            } else {
                setTagValue(id);
                props.setValues && props.setValues(id)
            }
        }
    }

    return (
        <>
            <Label>{props.label}</Label>
            <ProjectTagArea>
                {props.list && props.list.map((el: any) => {
                    return <Fragment key={uuidv4()}>
                        {
                            props.checkBox ?
                                <ClickTag
                                    name={el.name}
                                    id={el.id}
                                    marginBottom={0}
                                    isClick={interest && interest.includes(el.id) && true}
                                    onClick={onClickPushTag}
                                /> :
                                <ClickTag
                                    name={el.name}
                                    id={el.id}
                                    marginBottom={0}
                                    isClick={tagValue && tagValue === el.id && true}
                                    onClick={onClickPushTag}
                                />
                        }
                    </Fragment>
                }

                )}
            </ProjectTagArea>
        </>
    );
}
