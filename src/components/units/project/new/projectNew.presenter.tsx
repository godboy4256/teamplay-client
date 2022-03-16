import Button from "../../../commons/inputs/button/button.container";
import Select from "../../../commons/inputs/select/select.container";
import TextArea from "../../../commons/inputs/textarea/textarea.container";
import TypingInput from "../../../commons/inputs/typinginput/typinginput.container";

export default function ProjectUi(){
    return (
        <div>
            <h2>새로운 프로젝트르 생성합니다!</h2>
            <TypingInput 
                label="프로젝트 이름"
                type="text"
                placeholder="프로젝트 이름을 입력해주세요."
            />
            <TypingInput 
                label="팀 이름"
                type="text"
                placeholder="프로젝트를 진행할 팀의 이름을 입력해주세요."
            />
            <TypingInput 
                label="소개"
                type="text"
                placeholder="프로젝트를 간단하게 소개해주세요."
            />
            <Select 
                label="활동 지역"
                optionList={
                    ["목록1","목록2","목록3"]
                }
            />
            <div>
                <div>
                    <Select 
                        label="모집 인원"
                        optionList={
                            [
                                ["목록1","목록2","목록3"],
                                ["목록1","목록2","목록3"]
                            ]
                        }
                    />
                    <div>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                </div>  
                <Button btnvalue="삭제"/>
                <Button btnvalue="추가"/>
                <TypingInput 
                    label="기술/언어"
                    type="text"
                    placeholder="사용될 기술을 적어주세요."
                />
                <TextArea label="프로젝트 설명"/>
            </div>
        </div>
    )
}