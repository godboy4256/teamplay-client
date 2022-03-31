import { useState, ChangeEvent, createContext, MouseEvent } from "react";
import ProjectUI from "./projectNew.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  FETCH_POSITIONS,
  FETCH_LOCATION,
  FETCH_TYPES,
  CREARE_PROJECT,
} from "./projectNew.queries";

export const ProjectContext = createContext<any>({});

export default function Project() {
  const router = useRouter();
  const { data: positionData } =
    useQuery<Pick<IQuery, "fetchPositions">>(FETCH_POSITIONS);
  const { data: locationData } =
    useQuery<Pick<IQuery, "fetchLocations">>(FETCH_LOCATION);
  const { data: typesData } = useQuery<Pick<IQuery, "fetchTypes">>(FETCH_TYPES);

  const methodList = [
    { name: "대면", id: "MEET" },
    { name: "비대면", id: "UNTACT" },
    { name: "조정가능", id: "MEDIATE" },
  ];

  const positionList = positionData?.fetchPositions;
  const locationList = locationData?.fetchLocations;
  const typeList = typesData?.fetchTypes;

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
  const [description, setDescription] = useState("");
  const [numbers, setNumbers] = useState([0]);
  const [typeId, setTypeId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [positionIds, setPositionIds] = useState([""]);

  const [validName, setValidName] = useState(false);
  const [validTeamName, setValidTeamName] = useState(false);
  const [validIntro, setValidIntro] = useState(false);
  const [validMethod, setValidMethod] = useState(false);
  const [validTypeId, setValidTypeId] = useState(false);
  const [validLocationId, setValidLocationId] = useState(false);
  const [validNumbers, setValidNumbers] = useState(false);

  const onSubmitProject = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window) {
      const ui = Number(
        document?.querySelector<HTMLInputElement>("[class='0position0']")?.value
      );
      const ux = Number(
        document?.querySelector<HTMLInputElement>("[class='1position1']")?.value
      );
      const planner = Number(
        document?.querySelector<HTMLInputElement>("[class='2position2']")?.value
      );
      const backend = Number(
        document?.querySelector<HTMLInputElement>("[class='3position3']")?.value
      );
      const fullstack = Number(
        document?.querySelector<HTMLInputElement>("[class='4position4']")?.value
      );
      const front = Number(
        document?.querySelector<HTMLInputElement>("[class='5position5']")?.value
      );

      if (name === "") {
        setValidName(true);
      } else {
        setValidName(false);
      }

      if (teamname === "") {
        setValidTeamName(true);
      } else {
        setValidTeamName(false);
      }

      if (intro === "") {
        setValidIntro(true);
      } else {
        setValidIntro(false);
      }

      if (method === "") {
        setValidMethod(true);
      } else {
        setValidMethod(false);
      }

      if (typeId === "") {
        setValidTypeId(true);
      } else {
        setValidTypeId(false);
      }

      if (locationId === "") {
        setValidLocationId(true);
      } else {
        setValidLocationId(false);
      }

      if (ui + ux + planner + backend + fullstack + front === 0) {
        setValidNumbers(true);
      } else {
        setValidNumbers(false);
      }

      if (
        name !== "" &&
        teamname !== "" &&
        intro !== "" &&
        method !== "" &&
        typeId !== "" &&
        locationId !== "" &&
        ui + ux + planner + backend + fullstack + front > 0
      ) {
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
                description,
                numbers: [ui, ux, planner, backend, fullstack, front],
                typeId,
                skill: " ",
                platformIds: [""],
                locationId,
                positionIds: [""],
              },
            },
          });
          console.log(result);
          alert("프로젝트 추가 완료");
          router.push("/project/list");
        } catch (error) {
          console.log(error);
        }
      } else {
        window && window.scrollTo(0, 0);
      }
    }
  };

  console.log(method, typeId);

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
    methodList,
    setName,
    setTeamName,
    setIntro,
    setRecruitDate,
    setDescription,
    setTypeId,
    setMheod,
    setPositionIds,
    setLocationId,
    handleSelect2,
    selected2,
    numbers,
    setImgUrl,
    setNumbers,
    positionIds,
    name,
    validName,
    validTeamName,
    validIntro,
    validMethod,
    validTypeId,
    validLocationId,
    validNumbers,
  };

  return (
    <ProjectContext.Provider value={value}>
      <ProjectUI />
    </ProjectContext.Provider>
  );
}
