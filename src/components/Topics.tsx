import Topic from "./Topic";
import { useContext } from "react";
import { MyGlobalContext } from "../Helper/Context";
import FormTopic from "./FormTopic";

const Topics = () => {
  const { isAdmin } = useContext(MyGlobalContext);

  return (
    <div>
      {isAdmin && <FormTopic />}
      <Topic />
    </div>
  );
};

export default Topics;
