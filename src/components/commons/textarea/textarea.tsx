import styled from "@emotion/styled";
import { ChangeEvent, KeyboardEvent, useCallback, useRef } from "react";

const Textarea = styled.textarea`
  width: 100%;
  height: 30px;
  max-height: 15vh;
  padding-top: 7px;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  overflow: hidden;
`;

interface IProps {
  value: string | undefined;
  onChange: ((e: ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
  onkeydown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export function TextArea(props: IProps) {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    const textArea = textRef.current;
    if (!textArea) return;
    if (!textArea.value) textArea.style.height = "30px";

    textArea.style.height = textArea.scrollHeight + "px";
  }, []);

  return (
    <Textarea
      ref={textRef}
      value={props.value}
      onInput={handleResizeHeight}
      onKeyDown={props.onkeydown}
      onChange={props.onChange && props.onChange}
    />
  );
}
