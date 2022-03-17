import { Wrapper } from "../../../../commons/styles/commonStyls";
import ContentsButton from "../../../commons/inputs/component/button/button.container";
import Date from "../../../commons/inputs/component/date/date.container";
import ImageUpload from "../../../commons/inputs/component/imageUpload/imageUpload.container";
import Select from "../../../commons/inputs/component/select/select.container";
import SubmitButton from "../../../commons/inputs/component/submitbutton/submit.container";
import TagCheckBox from "../../../commons/inputs/component/tagcheck/tagcheck.container";
import TextArea from "../../../commons/inputs/component/textarea/textarea.container";
import TypingInput from "../../../commons/inputs/component/typinginput/typinginput.container";
import { Buttonbox, ProjectTop } from "./projectNew.styles";
import tagListDummy from '../../../../commons/json/tagList.json'
import selectListDummy from '../../../../commons/json/selectList.json'

export default function ProjectUi() {
    return (
        <>
            <ProjectTop>
                <h2>새로운 프로젝트를 생성합니다!</h2>
                <button>
                    <img src="../img/close.svg" alt="detail close" />
                </button>
            </ProjectTop>
            <Wrapper paddingTop="20px">
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
                <TagCheckBox
                    label="분야"
                    tagList={tagListDummy.tagList.field}
                />
                <Select
                    label="활동 지역"
                    optionList={selectListDummy.selectList.area}
                />
                <TagCheckBox
                    label="진행 방식"
                    tagList={tagListDummy.tagList.proceeding}
                />
                <div>
                    <Select
                        label="모집 인원"
                        optionList={selectListDummy.selectList.recruitment}
                        isAddLength={true}
                    />
                    <Buttonbox>
                        <ContentsButton
                            btnvalue="삭제"
                        />
                        <ContentsButton
                            btnvalue="추가"
                        />
                    </Buttonbox>
                </div>
                <Date label="모집 기간" />
                <ImageUpload label="대표 이미지" />
                <TagCheckBox
                    label="출시 플랫폼"
                    tagList={tagListDummy.tagList.platform}
                />
                <TypingInput
                    label="기술/언어"
                    type="text"
                    placeholder="사용될 기술을 적어주세요."
                />
                <TextArea label="프로젝트 설명" />
                <SubmitButton btnvalue="작성 완료" />
            </Wrapper>
        </>
    )
}