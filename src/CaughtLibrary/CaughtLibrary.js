import React from "react";

const CaughtLibrary = (props) => {
  const list = props.caught.map((critterData, index) => {
    return (
      <img
        className="critter-icon caught"
        key={index}
        src={critterData.icon_uri}
        alt="icon"
      />
    );
  });

  return (
    <div>
      <h4>Caught critters!</h4>
      <div className="caught-library">{list}</div>
    </div>
  );
};

export default CaughtLibrary;
