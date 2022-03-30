// import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import SearchBarUI from "./searchbar.presenter";

// const FETCH_PROJECTS = gql`
//   query fetchProjects($page: Float!) {
//     fetchProjects(page: $page) {
//       id
//       name
//       imgUrl
//       recruitDate
//     }
//   }
// `;

export default function SearchBar() {
  const [isSearchBar, setIsSearchBar] = useState(false);
  //   const { data } = useQuery(FETCH_PROJECTS, {
  //     variables: {
  //       page: 1,
  //     },
  //   });
  const onClickSearchOn = () => {
    setIsSearchBar(true);
  };

  const onClickSearchOff = () => {
    setIsSearchBar(false);
  };

  //   const onClickSearch = (e) => {
  //     console.log(e.target.value);

  //     // data && data.fetchProjects
  //   };
  //   data &&
  //     console.log(
  //       data.fetchProjects.filter((el) => el.name.includes("프로젝트"))
  //     );

  return (
    <SearchBarUI
      isSearchBar={isSearchBar}
      onClickSearchOn={onClickSearchOn}
      onClickSearchOff={onClickSearchOff}
    />
  );
}
