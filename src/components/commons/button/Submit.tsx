import styled from "@emotion/styled";

interface IPropsButton {
  fontSize: number;
  radius: number;
  backgroundcolor: string;
  border: boolean;
  color: string;
}

const Button = styled.button`
  width: 100%;
  padding: 12px 111px;
  background-color: ${(props: IPropsButton) => `${props.backgroundcolor}`};
  border: ${(props: IPropsButton) =>
    props.border ? "1px solid #c4c4c4" : "none"};
  color: ${(props: IPropsButton) => `${props.color}`};
  border-radius: ${(props: IPropsButton) => `${props.radius}px`};
  font-size: ${(props: IPropsButton) => `${props.fontSize}px`};
`;

interface IPropsSubmitButton {
  name: string;
  radius: number;
  fontSize: number;
  backgroundcolor: string;
  border: boolean;
  color: string;
}

export default function SubmitBtn(props: IPropsSubmitButton) {
  return (
    <Button
      radius={props.radius}
      fontSize={props.fontSize}
      backgroundcolor={props.backgroundcolor}
      border={props.border}
      color={props.color}
    >
      {props.name}
    </Button>
  );
}
