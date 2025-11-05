import { downloadVCard } from "../../utils/downloadVCard";
import Button from "../Button/Button";

export function NavMenu({ classNameBtn }) {
  return (
    <div className="nav__buttons_container">
      <Button
        className={`${classNameBtn} button-mode`}
        txtButton="PORTFOLIO"
        onClick={() => window.open("https://luzyla.dev/", "_blank")}
        onClickRole="link"
      ></Button>
      <Button
        className={`${classNameBtn} button`}
        txtButton="CONTACTO"
        onClick={downloadVCard}
      ></Button>
    </div>
  );
}
