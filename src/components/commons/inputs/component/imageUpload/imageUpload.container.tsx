import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { Label } from "../../commons/styles";

const FileStyle = styled.div`
    display: flex;
    justify-content: flex-end;
`

const FileInput = styled.input`
    display: none;
`

const FileUpload = styled.button`
    border: 1px solid #999;
    padding: 6px 11px;
    color: #999;
    border-radius:20px;
    font-size: 14px;
    margin-top: 4px;
`

const ImageBox = styled.div`
    width: 100%;
    height: 180px;
    color: #fff;
    flex-direction: column;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 12px;
    overflow: hidden;
    background-color:#999;
    & > div > div{
        color:#fff;
    }
    & img.upload__image{
        width: 100%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
`

export default function ImageUpload(props: any) {
    const refFile = useRef<HTMLInputElement>(null)
    const refImage = useRef<HTMLImageElement>(null)

    const [imgSrc, setImgSrc] = useState("../img/image_upload.svg")

    const onFileUpload = () => {
        const refCurret = refFile.current;
        if (refCurret) refCurret.click()
    }

    const onChangeFileUpload = (input: ChangeEvent<HTMLInputElement>) => {
        if (input.target.files?.[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(input.target.files?.[0]);
            reader.onload = (e) => {
                if (typeof e?.target?.result === "string")
                    setImgSrc(e?.target?.result)
            }
        }
    };


    return (
        <>
            <Label>{props.label}</Label>
            <ImageBox>
                {
                    imgSrc !== "../img/image_upload.svg" ? <img
                        ref={refImage}
                        src={imgSrc}
                        alt="preview image upload"
                        className="upload__image"
                    />
                        : <div>
                            <img src="../img/image_upload.svg" alt="preview upload before image" />
                            <div>프로젝트를 대표할 이미지를 첨부해주세요.</div>
                        </div>
                }
            </ImageBox>
            <FileStyle>
                <FileUpload onClick={onFileUpload}>이미지 업로드</FileUpload>
                <FileInput onChange={onChangeFileUpload} ref={refFile} type="file" />
            </FileStyle>
        </>
    )
}