import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useFetchUser from "../../../hooks/useFetchUser";

const WriteGoButtonStyle = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #3894ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  z-index: 10;
  & > img {
    width: 50%;
  }
`;

export default function WriteGoButton() {
  const router = useRouter();
  const user: any = useFetchUser();
  const onClickWritepage = () => {
    if (!user?.data?.fetchUser?.name) {
      alert("프로젝트를 빌드하려면 로그인이 필요합니다.");
      return;
    }
    router.push("/project/new");
    document.querySelector("#__next")?.classList.remove("projectdetalon");
  };
  return (
    <WriteGoButtonStyle onClick={onClickWritepage}>
      <img src="/img/gowrite.svg" alt="go write page button" />
    </WriteGoButtonStyle>
  );
}
