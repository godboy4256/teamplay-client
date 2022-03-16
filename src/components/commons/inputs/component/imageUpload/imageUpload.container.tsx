import styled from "@emotion/styled";
import { LegacyRef, useRef } from "react";
import { Label } from "../../commons/styles";

const FileStyle = styled.div`
    display: flex;
    justify-content: flex-end;
`

const FileInput = styled.input`
    display: none;
`

const FileUpload = styled.button`
    border: 1px solid #C4C4C4;
    padding: 6px 11px;
    color: #C4C4C4;
    border-radius:20px;
    font-size: 14px;
    margin-top: 4px;
`

const ImageBox = styled.div`
    width: 100%;
    height: 180px;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    background-color:#c4c4c4;
`

export default function ImageUpload(props: any) {
    const refFile = useRef<LegacyRef<HTMLInputElement>>()
    const onFileUpload = () => {
        refFile.current.click()
    }
    return (
        <>
            <Label>{props.label}</Label>
            <ImageBox>
                <img src="" />
                <div>
                    <img src="../images/image_upload.svg" alt="preview image upload" />
                    <div>프로젝트를 대표할 이미지를 첨부해주세요.</div>
                </div>
            </ImageBox>
            <FileStyle>
                <FileUpload onClick={onFileUpload}>이미지 업로드</FileUpload>
                <FileInput ref={refFile} type="file" />
            </FileStyle>
        </>
    )
}