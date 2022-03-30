import { useState, ChangeEvent, createContext, MouseEvent } from "react";
import ProjectUI from "./projectNew.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  FETCH_POSITIONS,
  FETCH_LOCATION,
  FETCH_TYPES,
  FETCH_PLATFORMS,
  CREARE_PROJECT,
} from "./projectNew.queries";
// import { IProjectContext } from "./projectNew.types";

export const ProjectContext = createContext<any>({});

export default function Project() {
  const router = useRouter();

  const { data: positionData } =
    useQuery<Pick<IQuery, "fetchPositions">>(FETCH_POSITIONS);
  const { data: locationData } =
    useQuery<Pick<IQuery, "fetchLocations">>(FETCH_LOCATION);
  const { data: typesData } = useQuery<Pick<IQuery, "fetchTypes">>(FETCH_TYPES);
  const { data: platformsData } =
    useQuery<Pick<IQuery, "fetchPlatforms">>(FETCH_PLATFORMS);

  const methodList = [
    { name: "대면", id: "MEET" },
    { name: "비대면", id: "UNTACT" },
    { name: "조정가능", id: "MEDIATE" },
  ];

  const positionList = positionData?.fetchPositions;
  const locationList = locationData?.fetchLocations;
  const typeList = typesData?.fetchTypes;
  const platformList = platformsData?.fetchPlatforms;

  const [createProject] = useMutation(CREARE_PROJECT);
  const [positionCount, setPositionCount] = useState(1);
  const positionAdd = () => {
    setPositionCount((prev) => prev + 1);
  };

  const [name, setName] = useState("");
  const [teamname, setTeamName] = useState("");
  const [intro, setIntro] = useState("");
  const [method, setMheod] = useState("");
  const [recruitDate, setRecruitDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [numbers, setNumbers] = useState([0]);
  const [typeId, setTypeId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [positionIds, setPositionIds] = useState([""]);
  const [platformIds, setPlatformIds] = useState([""]);

  const onSubmitProject = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await createProject({
        variables: {
          createProjectInput: {
            name,
            teamname,
            intro,
            method,
            recruitDate,
            imgUrl,
            skill,
            description,
            numbers,
            typeId,
            locationId,
            positionIds,
            platformIds,
          },
        },
      });
      console.log(result);
      alert("프로젝트 추가 완료");
      router.push("/project/list");
    } catch (error) {
      console.log(error);
    }
  };

  const positonMinus = () => {
    if (positionCount === 1) return;
    setPositionCount((prev) => prev - 1);
  };
  const [positionId, setPositionId] = useState("");
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("UX 디자이너");
  const [postionInclueds, setPostionInclueds] = useState<Array<string>>([]);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    setLocationId(e.target[e.target.selectedIndex].id);
  };

  const handleSelect2 = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected2(e.target.value);
    setPositionId(e.target[e.target.selectedIndex].id);
  };

  const [position, setPosition] = useState<Array<string>>([]);
  const onClickPositionAdd = () => {
    if (!postionInclueds.includes(selected2)) {
      setPosition([...position, selected2]);
      setPositionIds([...positionIds, positionId]);
      setNumbers([...numbers, positionCount]);
      setPostionInclueds([...postionInclueds, selected2]);
    } else {
      alert("이미 추가한 포지션입니다.");
    }
  };

  const value = {
    position,
    setPosition,
    selected,
    setSelected,
    handleSelect,
    onClickPositionAdd,
    postionInclueds,
    setPostionInclueds,
    positionAdd,
    positonMinus,
    positionCount,
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
    setRecruitDate,
    setDescription,
    setTypeId,
    setMheod,
    setLocationId,
    handleSelect2,
    selected2,
    numbers,
    setPlatformIds,
    setImgUrl,
    setNumbers,
  };

  return (
    <ProjectContext.Provider value={value}>
      <ProjectUI />
    </ProjectContext.Provider>
  );
}
