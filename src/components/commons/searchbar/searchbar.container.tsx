import { useState } from "react";
import SearchBarUI from "./searchbar.presenter";

interface IPropsSearchBar {
  fetchProjectCount?: number;
}

export default function SearchBar(props: IPropsSearchBar) {
  const [isSearchBar, setIsSearchBar] = useState(false);
  const onClickSearchOn = (e: any) => {
    e.preventDefault();
    setIsSearchBar(true);
    alert("검색 기능은 현재 준비중입니다.");
  };

  const onClickSearchOff = () => {
    setIsSearchBar(false);
  };

  return (
    <SearchBarUI
      isSearchBar={isSearchBar}
      onClickSearchOn={onClickSearchOn}
      onClickSearchOff={onClickSearchOff}
      fetchProjectCount={props.fetchProjectCount}
    />
  );
}
