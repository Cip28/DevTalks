import React from "react";
import { useState, useContext } from "react";
import { MyGlobalContext } from "../Helper/Context";

const FormTopic = () => {
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const { topics, setTopics } = useContext(MyGlobalContext);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && time) {
      setTopics([...topics, { id: Date.now(), name, time }]);
    }
    setName("")
    setTime("")
  };
  return (
    <form onSubmit={handleAdd} className='form__add'>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Web Development"
        />
      </div>
      <div className="form-control">
        <label>Interval</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="13:30"
        />
      </div>
      <button>Add topic</button>
    </form>
  );
  }
export default FormTopic
