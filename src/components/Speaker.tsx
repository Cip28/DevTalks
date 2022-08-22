import { useContext } from "react";
import { MyGlobalContext } from "../Helper/Context";
import anonim from "../images/anonim.jpg";
const Speaker = () => {
  const { isAdmin, speakers, setSpeakers } = useContext(MyGlobalContext);

  const handleClick = (id: number) => {
    setSpeakers(speakers.filter((speaker) => speaker.id !== id));
  };

  return (
    <div className="speakers">
      {speakers.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No speakers yet.</h1>
      ) : (
        speakers.map((speaker) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "3rem" }}
              key={speaker.id}
            >
              <img
                src={speaker.photo || anonim}
                className="card-img-top"
                alt={speaker.photo}
                style={{ height: "20rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Name: {speaker.name}</h5>
                <h6 className="card-title">Role: {speaker.role}</h6>
                <p className="card-text">Description: {speaker.description}</p>
                {isAdmin && (
                  <button
                    className="btn btn-warning"
                    onClick={() => handleClick(speaker.id)}
                  >
                    Remove speaker
                  </button>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Speaker;
