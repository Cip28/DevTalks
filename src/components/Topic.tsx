import "../App.css";
import { useContext } from "react";
import { MyGlobalContext } from "../Helper/Context";

const Topic = () => {
  const { isAdmin, topics, setTopics } = useContext(MyGlobalContext);
  const handleClick = (id: number) => {
    setTopics(topics.filter((topic) => topic.id !== id));
  };

  return (
    <div className="topics">
      {topics.length === 0 ? (
        <h1 style={{textAlign:'center'}}>No topics yet...</h1>
      ) : (
        topics.map((topic) => {
          return (
            // <div className="topic" >
              <div className="topic__text" key={topic.id}>
                <h4>{topic.name}</h4>
                <p>{topic.time}</p>
                {isAdmin && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleClick(topic.id)}
                  >
                    Remove topic
                  </button>
                )}
              {/* </div> */}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Topic;
