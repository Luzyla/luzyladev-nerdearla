import avatarLu from "../../assets/images/sticker.png";
import Button from "../Button/Button";
import { downloadVCard } from "../../utils/downloadVCard";

export default function Hero() {
  return (
    <main className="card">
      <div className="card__container_text">
        <p className="title1">¡Hola!</p>
        <p className="card__text">
          Qué lindo encontrarte por acá después de coincidir en
          <span className="card__text_highlight"> Nerdearla Madrid 2025</span>.
        </p>
        <p className="card__text">
          En esta mini-landing podes guardar mis datos de contacto, visitar mi
          portfolio y mis redes sociales.
        </p>
        <p className="card__text">
          Elegí la vía que prefieras y sigamos conversando!
        </p>

        <h2>Luzyla</h2>

        <nav className="card__buttons_container">
          <Button
            data-name="vCard"
            className="button_base button_contact"
            id="add-contact"
            txtButton="GUARDAR CONTACTO"
            onClick={downloadVCard}
          ></Button>
          <Button
            data-name="vCard"
            className="button_base button_vcard"
            id="add-contact"
            txtButton="VER PORTFOLIO"
            onClick={() => window.open("https://luzyla.dev/", "_blank")}
            onClickRole="link"
          ></Button>
        </nav>
      </div>

      <picture className="card__container_image">
        <img
          src={avatarLu}
          alt="avatar"
          className="card__container_image__image"
        />
        <h3>FrontEnd Dev · JS & TS · React & Next.js</h3>
      </picture>
    </main>
  );
}
