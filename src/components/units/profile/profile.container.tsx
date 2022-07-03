import { createContext } from "react";
import ProfileUI from "./profile.presenter";
// import ProfileUI from "./profile.presenter";
import { IPropsProfileContext } from "./profile.types";

export const ProfileContext = createContext<IPropsProfileContext>({});

export default function Profile() {
  return (
    <div>
      <ProfileUI />
    </div>
  );
}
