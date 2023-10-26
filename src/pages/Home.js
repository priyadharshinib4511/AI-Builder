import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";


export default function Home(){
    return (
        <>
        <Topbar />
  
        <Outlet />
      </>
    )
}