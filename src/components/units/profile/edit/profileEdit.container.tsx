import { useRouter } from "next/router";
import ProfileEditUI from "./profileEdit.presenter";

export default function ProfileEdit(){
    const router = useRouter()
    
    return(
        <ProfileEditUI/>
    )
}