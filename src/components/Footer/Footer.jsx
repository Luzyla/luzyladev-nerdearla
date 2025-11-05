import { Signature } from "../Signature/Signature";
import { SocialMediaIcons } from "../SocialMediaIcons/SocialMediaIcons";

export function Footer() {
  return (
    <footer className="seccion-footer" id="a-redes">
      <SocialMediaIcons
        classNameContainer="footer-socialmedia-icons"
        colorIcon="footer-color-icons"
        classNameIcon="footer-icons"
        contactMe={false}
      />
      <Signature></Signature>
    </footer>
  );
}
