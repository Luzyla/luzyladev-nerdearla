// import { useEffect, useState } from "react";
import { NavMenu } from "../NavMenu/NavMenu";

export function Header() {
  return (
    <header className="header-fixed">
      {/* <nav className="nav-header"> */}
      <NavMenu
        classNameList="barra-mobile contenedor-barra-mobile"
        classNameBtn="menu-header nav-header"
      ></NavMenu>
      {/* </nav> */}
    </header>
  );
}
