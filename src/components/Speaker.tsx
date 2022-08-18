import speakers  from "../speakers";
import ControlButtons  from "./ControlButtons";


const Speaker = () => {
  return (
    <div className='speakers'>
      {speakers.map((speaker) => {
        return (
          <div className="card" style={{ width: "18rem",marginBottom:"3rem" }} key={speaker.id}>
            <img
              src={speaker.photo}
              className="card-img-top"
              alt={speaker.photo}
              style={{ height:"20rem"}}
            />
            <div className="card-body">
              <h5 className="card-title">Name: {speaker.name}</h5>
              <h6 className="card-title">Role: {speaker.role}</h6>
              <p className="card-text">
                Description: {speaker.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Speaker;
