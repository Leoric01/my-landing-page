import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Leoric01?tab=repositories",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ji%C5%99%C3%AD-urban-803532287/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
