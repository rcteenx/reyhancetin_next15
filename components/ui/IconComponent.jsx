import {
  FaArrowCircleRight, 
  FaBlog,
  FaPhoneSquareAlt,
  FaCat,
  FaCompass,
  FaGlobeAfrica,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMagnifyingGlass,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
  FaRegFileAlt,
  FaInfoCircle,
  FaWifi,
  FaStar,
  FaHome,
  FaSitemap,
  FaGoogle,
  FaMobileAlt,
  FaRev,
  FaAlignLeft,
} from "react-icons/fa";

import { SiDreamstime } from "react-icons/si";
import { IoBodyOutline } from "react-icons/io5";
import { PiSecurityCamera } from "react-icons/pi";
import { MdEmail, MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import {
  GiArtificialHive,
  GiInterstellarPath,
  GiAwareness,
} from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";

import { MdLocationSearching } from "react-icons/md";

const iconTypes = {
  pointing: FaArrowCircleRight,
  compass: FaCompass,
  search: MdLocationSearching,
  ai: GiArtificialHive,
  path: GiInterstellarPath,
  work: BsPersonWorkspace,
  blog: FaBlog,
  presence: GiAwareness,
  phone: FaPhoneSquareAlt,
  email: MdEmail,
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
  contact: BiSolidContact,
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
