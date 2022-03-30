import styled from "@emotion/styled";

interface IPropsSearchInput {
  onSearchbar: boolean;
}

export const SearchBarStyle = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export const SearchBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  margin-bottom: 10px;
  @media (min-width: 1200px) {
    border-bottom: 1px solid #ccc;
  }
`;

export const SearchInput = styled.input`
  width: 500px;
  background-color: rgba(0, 0, 0, 0.1);

  /* width: ${(props: IPropsSearchInput) => (!props.onSearchbar ? 0 : "600px")};
  opacity: ${(props: IPropsSearchInput) => (!props.onSearchbar ? 0 : 1)}; */
  transition: 0.5s ease-in-out;
  padding: 12px;
  border-radius: 20px;
  margin-right: 10px;
  /* background-color: ${(props: IPropsSearchInput) =>
    !props.onSearchbar ? "#fff" : "#c4c4c4"}; ; */
  &:focus {
    width: 600px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const SearchBarBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  & div > img {
    margin-left: 5px;
  }
`;
