// import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import SearchBarUI from "./searchbar.presenter";

interface IPropsSearchBar{
  fetchProjectCount?:number
}

export default function SearchBar(props:IPropsSearchBar) {
  const [isSearchBar, setIsSearchBar] = useState(false);
  const onClickSearchOn = () => {
    setIsSearchBar(true);
  };

  const onClickSearchOff = () => {
    setIsSearchBar(false);
  };

  const onScrollStickyHeader = () => {
    if(window.screenY === 0){
      document.querySelector('#stick_header')?.classList?.add("onSticky")
    }else{
      document.querySelector('#stick_header')?.classList?.remove("onSticky")
    }
  }
  
  useEffect(() => {
    window &&
    window.addEventListener('scroll',onScrollStickyHeader)

  },[])

  return (
    <SearchBarUI
      isSearchBar={isSearchBar}
      onClickSearchOn={onClickSearchOn}
      onClickSearchOff={onClickSearchOff}
      fetchProjectCount={props.fetchProjectCount}
    />
  );
}
