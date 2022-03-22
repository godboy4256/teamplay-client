import styled from "@emotion/styled";

interface IPropsDiv {
  marginBottom: number;
}

const Div = styled.div`
  display: inline-block;

  padding: 10px 20px;
  margin-right: 12px;
  margin-bottom: ${(props: IPropsDiv) => `${props.marginBottom}px`};

  border-radius: 20px;
  border: 1px solid #c4c4c4;
  background-color: #ffffff;

  font-weight: 400;
  font-size: 14px;
  color: #c4c4c4;

  :hover {
    cursor: pointer;
  }
`;

interface IPropsClickTag {
  name: string;
  marginBottom: number;
}

export default function ClickTag(props: IPropsClickTag) {
  return <Div marginBottom={props.marginBottom}>{props.name}</Div>;
}
