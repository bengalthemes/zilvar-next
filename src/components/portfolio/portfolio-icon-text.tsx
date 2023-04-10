import { FaLink, FaImage } from "react-icons/fa";

const PortfolioTypeIconText = (portfolioType: string, isText?: boolean) => {
  let icon: any;
  let text: string = "";
  if (portfolioType?.toLowerCase() === "link") {
    icon = <FaLink />;
    text = "Project";
  } else if (portfolioType?.toLowerCase() === "gallery") {
    icon = "link";
    text = "Gallery";
  } else if (portfolioType?.toLowerCase() === "video") {
    icon = "video";
    text = "Video";
  } else if (portfolioType?.toLowerCase() === "slide") {
    icon = "sliders";
    text = "Slide";
  } else {
    icon = <FaImage />;
    text = "image";
  }

  return isText ? text : icon;
};

export default PortfolioTypeIconText;
