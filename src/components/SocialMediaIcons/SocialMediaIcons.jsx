import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "../Link/Link";
import { Icon } from "../Icon/Icon";

const dataSocialMedias = [
  {
    id: 1,
    url: "http://linkedin.com/in/luzyla",
    icon: FaLinkedin,
    iconTitle: "LinkedIn",
  },
  {
    id: 2,
    url: "https://github.com/Luzyla",
    icon: FaGithub,
    iconTitle: "GitHub",
  },
  {
    id: 3,
    url: "http://luzyla.medium.com",
    icon: FaMedium,
    iconTitle: "Medium",
  },
  {
    id: 4,
    url: "http://instagram.com/luzyla.dev",
    icon: FaInstagram,
    iconTitle: "Instagram",
  },
  {
    id: 5,
    url: "https://wa.me/34658318794?text=Hola!%20Te%20conoc%C3%AD%20en%20Nerdearla%20y%20quiero%20seguir%20en%20contacto!",
    icon: FaWhatsapp,
    iconTitle: "WhatsApp",
  },
  {
    id: 6,
    url: "mailto:coder@luzyla.dev",
    icon: FaEnvelope,
    iconTitle: "E-mail",
  },
];

export function SocialMediaIcons({
  classNameContainer = "contenedor-icon-socialmedia",
  colorIcon = "var(--color-icons)",
  sizeIcon = "30",
  classNameIcon = "icon-socialmedia",
}) {
  return (
    <div className={classNameContainer}>
      {dataSocialMedias.map((socialmedia) => (
        <Link
          url={socialmedia.url}
          target="_blank"
          key={socialmedia.id}
          className={`${socialmedia.className}`}
        >
          <Icon
            component={socialmedia.icon}
            title={socialmedia.iconTitle}
            size={sizeIcon}
            color={colorIcon}
            className={classNameIcon}
          ></Icon>
        </Link>
      ))}
    </div>
  );
}
