import { Wrapper } from "../../../../commons/styles/commonStyls";
import Date from "../../../commons/inputs/component/date/date.container";
import ImageUpload from "../../../commons/inputs/component/imageUpload/imageUpload.container";
import LocationSelect from "./select/locationselect.container";
import SubmitButton from "../../../commons/inputs/component/submitbutton/submit.container";
import TextArea from "../../../commons/inputs/component/textarea/textarea.container";
import TypingInput from "../../../commons/inputs/component/typinginput/typinginput.container";
import * as S from "./projectNew.styles";
import TagBox from "./tagbox/TagBox";
import { useContext } from "react";
import { ProjectContext } from "./projectNew.container";
import PositionSelect from "./select/positionselect.container";


export default function ProjectUI() {
    const {
        onSubmitProject,
        positionList,
        locationList,
        typeList,
        platformList,
        methodList,
        setName,
        setTeamName,
        setIntro,
        setSkill,
        setTypeId,
        setMheod,
        setDescription,
        setRecruitDate,
        setPlatformIds,
        setImgUrl
    } = useContext(ProjectContext)
    return (
        <>
            <S.ProjectTop>
                <h2>새로운 프로젝트를 생성합니다!</h2>
                <button>
                    <img src="../img/close.svg" alt="detail close" />
                </button>
            </S.ProjectTop>
            <Wrapper paddingTop="20px">
                <form onSubmit={onSubmitProject}>
                    <TypingInput
                        label="프로젝트 이름"
                        type="text"
                        placeholder="프로젝트 이름을 입력해주세요."
                        setValues={setName}
                    />
                    <TypingInput
                        label="팀 이름"
                        type="text"
                        placeholder="프로젝트를 진행할 팀의 이름을 입력해주세요."
                        setValues={setTeamName}
                    />
                    <TypingInput
                        label="소개"
                        type="text"
                        placeholder="프로젝트를 간단하게 소개해주세요."
                        setValues={setIntro}
                    />
                    <TagBox
                        label="분야"
                        list={typeList}
                        checkBox={false}
                        setValues={setTypeId}
                    />
                    <LocationSelect
                        label="활동 지역"
                        optionList={locationList}
                        addBox={false}
                    />
                    <TagBox
                        label="진행 방식"
                        list={methodList}
                        checkBox={false}
                        setValues={setMheod}
                    />
                    <PositionSelect
                        label="모집 인원"
                        optionList={positionList}
                        addBox={true}
                    />
                    <Date
                        label="모집 기간"
                        setValues={setRecruitDate}
                    />
                    <ImageUpload 
                        label="대표 이미지" 
                        setValues={setImgUrl}
                    />
                    <TagBox
                        label="출시 플랫폼"
                        list={platformList}
                        checkBox={true}
                        setValues={setPlatformIds}
                    />
                    <TypingInput
                        label="기술/언어"
                        type="text"
                        placeholder="사용될 기술을 적어주세요."
                        setValues={setSkill}
                    />
                    <TextArea
                        label="프로젝트 설명"
                        setValues={setDescription}
                    />
                    <SubmitButton btnvalue="작성 완료" />
                </form>
            </Wrapper>
        </>
    )
}