import { Outlet } from "react-router-dom"
import { Header } from "./Components/Header/Header"
import MainNav from "./Components/Header/MainNav"

export const Layout = ()=>{
     return(
          <>
          <Header/>
          <Outlet/>
          <MainNav/>
          </>
     )
}