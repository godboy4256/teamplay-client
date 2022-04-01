import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreatePointPaymentArgs,
  IQuery,
} from "../../../commons/types/generated/types";

const CREATE_POINT_PAYMENT = gql`
  mutation createPointPayment($impUid: String!, $amount: Float!) {
    createPointPayment(impUid: $impUid, amount: $amount) {
      id
      impUid
      amount
      status
    }
  }
`;

interface IPropsPaymentpoint {
  data?: Pick<IQuery, "fetchUser">;
}

const PaymentWrapper = styled.div`
  width: 600px;
  background-color: #fff;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 20%);
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function PaymentpointUI(props: IPropsPaymentpoint) {
  const [createPointPayment] = useMutation<
    Pick<IMutation, "createPointPayment">,
    IMutationCreatePointPaymentArgs
  >(CREATE_POINT_PAYMENT);
  const [amount, setAmount] = useState(0);
  const selectChargePoint = (e: ChangeEvent<HTMLSelectElement>) => {
    setAmount(Number(e.target.value));
  };
  const onClickPayment = () => {
    if (window && props?.data) {
      const { IMP }: any = window; // 생략 가능
      IMP.init("imp49910675");
      IMP.request_pay(
        {
          // param
          pg: "html5_inicis",
          pay_method: "card",
          // merchant_uid: "ORD20180131-0000011",
          name: "챌린저스 포인트",
          amount: amount,
          buyer_email: props?.data?.fetchUser?.email,
          buyer_name: props?.data?.fetchUser?.name,
          // m_redirect_url: 모바일 결제시 돌아갈 주소!!
        },
        async function (rsp: any) {
          if (rsp.success) {
            console.log(rsp.imp_uid, rsp.paid_amount);
            console.log("포인트 결제가 완료 되었습니다.");
            try {
              await createPointPayment({
                variables: {
                  impUid: rsp.imp_uid,
                  amount: rsp.paid_amount,
                },
              });
              alert("포인트가 충전되었습니다.");
            } catch (error) {
              console.log(error);
            }
          } else {
            alert("포인트 충전에 실패하였습니다.");
          }
        }
      );
    }
  };

  return (
    <PaymentWrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select onChange={selectChargePoint}>
        <option value="" disabled>
          충전 잔액 선택
        </option>
        <option value="100">실험용 100 Point</option>
        <option value="500">실험용 500 Point</option>
        <option value="1000">실험용 1000 Point</option>
        <option value="10000">10000 Point</option>
        <option value="30000">30000 Point</option>
      </select>
      <button onClick={onClickPayment}>첼린저스 포인트 충전하기</button>
    </PaymentWrapper>
  );
}
