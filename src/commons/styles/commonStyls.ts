import styled from "@emotion/styled";

interface IWrapperProps {
    paddingTop: string;
}

export const Wrapper = styled.div`
    padding: 0 20px;
    padding-top: ${(props: IWrapperProps) => props.paddingTop};
`