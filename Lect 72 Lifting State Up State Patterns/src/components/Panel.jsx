import "./panel.css";
import { useState } from "react";

/*
const Panel = ({title, children}) => {

  const [showContent, setShowContent] = useState(false);

  const onShowClick = () => {
    setShowContent(!showContent);
  }

  return (
    <div className="panel">
      <h1 className="panel-title"> {title} </h1>
      {showContent ? <p className="panel-content"> {children} </p> : null }

      <footer className="panel-footer">
        <button onClick={onShowClick}> { showContent ? "Hide" : "Show"} Content</button>
      </footer>

    </div>
  )
}

*/

// Lifting the State up
const Panel = ({ title, children, showContent, onShow }) => {
  return (
    <section className="panel">
      <h1 className="panel-title">{title}</h1>
      {showContent ? (
        <section className="panel-content">{children}</section> ) : null}
      <footer className="panel-footer">
        {!showContent ? <button onClick={onShow}>Show</button> : null}
      </footer>
    </section>
  );
};

export default Panel;
