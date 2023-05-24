import "./Social.css";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";

const Social = () => {
  const socialItems = [
    { id: 1, element: <BsFacebook /> },
    { id: 2, element: <BsInstagram /> },
    { id: 3, element: <BsLinkedin /> },
    { id: 4, element: <BsYoutube /> },
    { id: 5, element: <BsGithub /> },
  ];
  return (
    <div className="social__wrapper">
      {socialItems.map((i) => (
        <div key={i.id} className="social__item">
          {i.element}
        </div>
      ))}
    </div>
  );
};

export default Social;
