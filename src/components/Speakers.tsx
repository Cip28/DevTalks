import Speaker from "./Speaker";
import Form from "./Form";
import { useContext } from "react";
import { MyGlobalContext } from "../Helper/Context";

const Speakers = () => {
  const { isAdmin } = useContext(MyGlobalContext);

  return (
    <div>
      {isAdmin && <Form />}
      <Speaker />
    </div> 
  );
};

export default Speakers;
