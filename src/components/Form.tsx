import React from "react";
import { useContext, useState } from "react";
import { MyGlobalContext } from "../Helper/Context";

const Form = () => {
  const { speakers, setSpeakers, photo, setPhoto } =
    useContext(MyGlobalContext);
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && role && description) {
      setSpeakers([
        ...speakers,
        { id: Date.now(), name, photo, role, description },
      ]);
    }
    setName("");
    setPhoto("");
    setRole("");
    setDescription("");
  };

  return (
    <form className="form__add" onSubmit={handleAdd}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Barbu Ciprian"
        />
      </div>

      <div className="form-control">
        <label>Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Frontend Developer"
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Creates and maintains responsive websites..."
        />
      </div>

      <button>Add Speaker</button>
    </form>
  );
};

export default Form;
