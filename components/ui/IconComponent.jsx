import {
  FaCat,
  FaGlobeAfrica,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
  FaRegFileAlt,
  FaInfoCircle,
  FaWifi,
  FaStar,
  FaHome,
  FaBlog,
  FaSitemap,
  FaGoogle,
  FaMobileAlt,
  FaRev,
  FaAlignLeft,
} from "react-icons/fa";

import { SiDreamstime } from "react-icons/si";
import { IoBodyOutline } from "react-icons/io5";
import { PiSecurityCamera } from "react-icons/pi";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";

const iconTypes = {
  me: ImSpinner9,
  cat: FaCat,
  africa: FaGlobeAfrica,
  medImagination: SiDreamstime,
  medBody: IoBodyOutline,
  medObserve: PiSecurityCamera,
  medSilence: MdDoNotDisturbOnTotalSilence,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  github: FaGithub,
  linkedin: FaLinkedin,
  arrowright: FaArrowRight,
  regfilealt: FaRegFileAlt,
  infocircle: FaInfoCircle,
  wifi: FaWifi,
  star: FaStar,
  home: FaHome,
  blog: FaBlog,
  sitemap: FaSitemap,
  google: FaGoogle,
  mobilealt: FaMobileAlt,
  rev: FaRev,
  alignleft: FaAlignLeft,
  menu: AiOutlineMenu,
  menuClose: AiOutlineClose,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
