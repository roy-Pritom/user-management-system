import { useEffect } from "react";

const useTitle=(title)=>{

    useEffect(()=>{
        document.title=`userManagement | ${title}`
    },[title])
       
}
export default useTitle;