import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import IntroRightContentBlock from "./IntroRightContentBlock";
import IncubLeftContentBlock from "./IncubLeftContentBlock";
import CitiesBlock from "../Cities";

const ContentBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "intro") return <IntroRightContentBlock {...props} />;
  if (props.type === "incub") return <IncubLeftContentBlock {...props} />;
  if (props.type === "city") return <CitiesBlock {...props} />;
  return null;
};

export default ContentBlock;
