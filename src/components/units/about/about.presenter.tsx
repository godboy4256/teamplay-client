import { Logo } from "../../commons/layout/header/header.styles";
import CountUp from "react-countup";
import * as S from "./about.style";
import DoneGirl from "../../commons/doneGirl";

export default function AboutUI(props: any) {
  return (
    <>
      <S.AboutWrapper>
        <S.AboutBackground id="about_background"></S.AboutBackground>
        <S.AboutMeTop>
          <S.ContentBox id="content_box_ani02">
            <div>
              <Logo className="about__logo">
                <img src="/img/commons/logo.svg" alt="logo" />
              </Logo>
              <div className="main__desc">
                팀 프로젝트가 필요한 경력없는 주니어 분들을 위한 팀 프로젝트 팀
                빌딩 서비스입니다. 기존의 여러가지 사이드 프로젝트 플랫폼이나
                스타트 업 창업멤버를 모집하는 플랫폼들과는 다르게 취업을 위한 팀
                프로젝트 포트폴리오가 필요하지만 경력이 없고 팀 프로젝트 경험이
                없어서 열심히 독학을 해서 팀 프로젝트에 들어갈 준비가 되어도
                같이 할 신입 팀원이 없어서 팀 프로젝트 포트폴리오를 준비하기
                힘들었던 분들을 위한 서비스입니다.
              </div>
              <button onClick={props.moveToMain} className="about__button">
                홈으로
              </button>
            </div>
          </S.ContentBox>
          <div id="content_box_ani01">
            <DoneGirl class="done__girl" />
          </div>
          <S.ScrollDown id="scrolldown__container">
            <div className="scrolldown-wrapper">
              <div className="scrolldown">
                <svg height="30" width="10">
                  <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
                  <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
                </svg>
              </div>
            </div>
          </S.ScrollDown>
        </S.AboutMeTop>
        <S.AboutMeSection id="about01">
          <h2 id="title__motion01" className="about-content-title">
            프로젝트 리스트
          </h2>
          <div>
            <div>
              <div className="contents_img" id="scroll__motion01">
                <img src="/img/about05.png" alt="about__contetns" />
              </div>
              <div className="contents_img right_layout" id="scroll__motion02">
                <img src="/img/about08.png" alt="about__contetns" />
              </div>
              <div className="contents_img" id="scroll__motion03">
                <img src="/img/about07.png" alt="about__contetns" />
              </div>
            </div>
            <div id="content__text01" className="content_content">
              <div>
                참여하고 싶은 프로젝트를 선택해서 프로젝트에 참여하고 시작하고
                싶은 프로젝트를 등록할 수 있는 프로젝트 리스트
                페이지입니다.잡코리아, 사람인 과 같은 채용공고 플랫폼의
                채용공고처럼 모집 중인 포지션과 인원 수, 프로젝트를 진행하는
                지역, 접수 마감 기간, 프로젝트를 빌드한 팀장,프로젝트에 대한
                설명 및 소개,대면/비대면 여부등을 확인 할 수 있습니다. 원한다면
                자신이 직접이 프로젝트를 빌드하여 팀원을 모집 할 수도 있습니다.
                또한 유저들이 해당 프로젝트에 대하여 질문을 받을 수 있도록 댓글
                기능을 구현하였습니다.
              </div>
              <button
                onClick={() => {
                  props.router.push("project/list");
                }}
                className="about__button"
              >
                자세히 보기
              </button>
            </div>
          </div>
        </S.AboutMeSection>
        <S.AboutMeSection id="about02">
          <h2 id="title__motion02" className="about-content-title">
            프로젝트 팀 빌드 채팅
          </h2>
          <div>
            <div>
              <div className="contents_img" id="scroll__motion04">
                <img src="/img/about06.png" alt="about__contetns" />
              </div>
              <div className="contents_img right_layout" id="scroll__motion05">
                <img src="/img/about04.png" alt="about__contetns" />
              </div>
            </div>
            <div id="content__text02" className="content_content">
              <div>
                참여하고 싶은 프로젝트를 선택하고 “프로젝트 참여” 를 클릭하면
                해당 프로젝트에 대한 단체 채팅방으로 입장할 수 있습니다.
                채팅방에는 해당 프로젝트에 참여하기 원하는 모든 유저들이 채팅에
                참여하고 있으면 팀장(채팅방의 주인)이 원하는 팀원을 선별하여
                프로젝트를 시작할 수 있는 시스템입니다.
              </div>
              <button
                onClick={() => {
                  props.router.push("project/list");
                }}
                className="about__button"
              >
                자세히 보기
              </button>
            </div>
          </div>
        </S.AboutMeSection>
        <S.AboutMeSection id="about03">
          <h2 id="title__motion03" className="about-content-title">
            챌린저스 포인트
          </h2>
          <div>
            <div>
              <div className="contents_img" id="scroll__motion06">
                <img src="/img/about09.png" alt="about__contetns" />
              </div>
              <div className="contents_img" id="scroll__motion07">
                <img src="/img/about02.png" alt="about__contetns" />
              </div>
              <div className="contents_img right_layout" id="scroll__motion08">
                <img src="/img/about10.png" alt="about__contetns" />
              </div>
            </div>
            <div id="content__text03" className="content_content">
              <div>
                챌린저스 포인트는 프로젝트를 처음부터 끝까지 완주하기 위한
                동기부여를 도와줄 수 있는 목적의 포인트를 프로젝트에 설정할 수
                있는 기능입니다. 결제를 통해 챌린저스 포인트를 충전합니다.
                충전한 포인트는 프로젝트가 시작될 때 해당 프로젝트에 설정되어
                있는 포인트를 지불하는 용으로 사용됩니다. 그리고 프로젝트를
                무사하 완수하고 프로젝트 관리 페이지에서 프로젝트 완료를
                클릭하면 챌린저스 포인트를 환급 받을 수 있습니다.
              </div>
              <button
                onClick={() => {
                  props.router.push("payment/");
                }}
                className="about__button"
              >
                자세히 보기
              </button>
            </div>
          </div>
        </S.AboutMeSection>
        <S.AboutMeSection id="about04">
          <div>
            <div className="img_box">
              <img
                src="/img/about_con_recurite.svg"
                alt="about_con_guide_img01"
              />
            </div>
            <h3>모집중인 프로젝트</h3>
            <CountUp
              start={0}
              end={props.projectConut?.fetchProjectCounts}
              duration={2.75}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span
                    className="counting"
                    id="pro"
                    onClick={start}
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
          </div>
          <div>
            <div className="img_box">
              <img
                src="/img/about_con_progress.svg"
                alt="about_con_guide_img01"
              />
            </div>
            <h3>진행중인 프로젝트</h3>
            <CountUp start={0} end={props.startProjcet} duration={2.75}>
              {({ countUpRef, start }) => (
                <div>
                  <span className="counting" onClick={start} ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
          <div>
            <div className="img_box">
              <img src="/img/about_con_done.svg" alt="about_con_guide_img01" />
            </div>
            <h3>완료된 프로젝트</h3>
            <CountUp start={0} end={props.completeProjcet} duration={2.75}>
              {({ countUpRef, start }) => (
                <div>
                  <span className="counting" onClick={start} ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
          <div>
            <div className="img_box">
              <img src="/img/about_con_users.svg" alt="about_con_guide_img01" />
            </div>
            <h3>사용자</h3>
            <CountUp
              start={0}
              end={props.usersdata?.fetchUsers?.length}
              duration={1}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span className="counting" onClick={start} ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
        </S.AboutMeSection>
      </S.AboutWrapper>
    </>
  );
}
