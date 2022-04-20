import { breakPoints } from "./../../../commons/styles/breakpoint";
import styled from "@emotion/styled";

export const PaymentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  background-color: #fff;
  height: 76vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  line-height: 1.4;
  margin: 50px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
    border: none;
    padding: 0;
  }
  & > div {
    width: 25%;
    @media ${breakPoints.tablet} {
    }
    @media ${breakPoints.mobile} {
      width: 100%;
    }
  }
  & div > ul {
    padding: 20px 0;
  }
  & .point {
    color: #3894ff;
  }
  & div > h2 {
    padding: 20px 0;
  }
  & div > select {
    border: 1px solid #ccc;
    width: 142px;
    font-size: 13px;
    padding: 13px 9px;
    border-radius: 5px;
    margin-right: 8px;
    appearance: none;
    background: url("../img/select.svg") no-repeat right 9px center;
  }
  & button {
    display: inline-block;
    background-color: #3894ff;
    padding: 10px 25px;
    color: #fff;
    border-radius: 8px;
    margin-left: 0;
    flex: none;
    margin-right: 7px;
  }
  & .payment__back {
    width: 50%;
    height: 100%;
    @media ${breakPoints.tablet} {
      width: 100%;
      margin-bottom: 20px;
    }
    @media ${breakPoints.mobile} {
      width: 100%;
      margin-bottom: 20px;
    }
    background: url("/img/payment.png") no-repeat center/contain;
  }
`;

export const PaymentContentsImg = styled.div`
  width: 40%;
  height: 400px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;
export const PaymentBox = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
