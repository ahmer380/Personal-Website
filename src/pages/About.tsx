import { useState } from "react";
import { MdArticle, MdCake, MdCircle, MdEmojiEvents, MdSchool, MdWork } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "../assets/timelineEvents.json";
import Popup from "../components/Popup";
import formatText from "../helpers";

function About() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    description: "",
  });
  const handleButtonClick = (title: string, description: string) => {
    setPopupContent({ title, description });
    setShowPopup(true);
  };

  return (
    <div id='About'>
      <h1 style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "5px" }}>My (honest) Journey</h1>
      <div>
        <VerticalTimeline>
          {timelineData.timelineEvents.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName='date'
                iconStyle={{ background: "#4DB6ac" }}
                icon={getIcon(element.icon)}
              >
                <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                {formatText(element.description)}
                {element.buttonLabel && (
                  <div
                    key={element.id}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: 15,
                    }}
                  >
                    <button onClick={() => handleButtonClick(element.popup.title, element.popup.description)}>{element.buttonLabel}</button>
                  </div>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <h2>{popupContent.title}</h2>
          {formatText(popupContent.description)}
        </Popup>
      )}
    </div>
  );
}

function getIcon(iconName: string): JSX.Element {
  switch (iconName) {
    case "work":
      return <MdWork />;
    case "school":
      return <MdSchool />;
    case "trophy":
      return <MdEmojiEvents />;
    case "article":
      return <MdArticle />;
    case "birthday":
      return <MdCake />;
    default:
      return <MdCircle />;
  }
}

export default About;
