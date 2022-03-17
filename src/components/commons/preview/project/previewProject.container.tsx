import PreviewProjectUI from './previewProject.presenter'

export default function PreviewProject() {
    const ProjectInfoList = [{name: "팀장", value: "서울 강남구"}, {name: "팀장", value: "제이든"}, {name: "진행 단계", value: "23%"}, {name: "팀", value: "코드캠프 T.P.O."}];
    return <PreviewProjectUI ProjectInfoList={ProjectInfoList}/>;
}