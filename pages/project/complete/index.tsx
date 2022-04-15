import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../src/commons/styles/breakpoint";
import useFetchUser from "../../../src/components/commons/hooks/useFetchUser";
import CompleteSvg from "./completeSvg";
import DoneGirl from "./doneGirl";

const CompletePage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #f3f9ff;
  & h2 {
    text-align: center;
    font-size: 20px;
    padding-bottom: 10px;
  }
  & h3 {
    text-align: center;
    font-size: 16px;
    padding-bottom: 10px;
    & span {
      color: #3894ff;
      font-size: 18px;
    }
  }
  @media ${breakPoints.mobile} {
  }
`;

const DoneGirlPosition = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 500px;
    @media ${breakPoints.tablet} {
      opacity: 0.3;
    }
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const PointBox = styled.div`
  padding: 20px 0;
  & > div {
    line-height: 1.4;
    & > span {
      font-size: 16px;
      color: #3894ff;
    }
  }
`;

const CompleteTop = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.tablet} {
    transform: translate(-50%, -50%);
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    position: static;
    height: 100vh;
    transform: translate(0, 0);
  }
`;

function ProjectCompletePayment() {
  const { data } = useFetchUser();
  const router = useRouter();

  return (
    <CompletePage>
      <DoneGirlPosition>
        <DoneGirl />
      </DoneGirlPosition>
      <CompleteTop>
        <CompleteSvg />
        <h2>축하합니다.</h2>
        <h3>
          <span>{router?.query?.name} </span>가 성공적으로 끝났습니다. 포인트가
          환급됩니다.
        </h3>
        <PointBox>
          <div>
            환급 포인트 : <span>{router?.query?.point}</span>
          </div>
          <div>
            현재 포인트 : <span>{data?.fetchUser.point}</span>
          </div>
        </PointBox>
      </CompleteTop>
    </CompletePage>
  );
}

export default ProjectCompletePayment;
