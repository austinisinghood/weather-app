import React from "react";

// Components
import Icon from "./Icon";

function Current(props) {
  return (
    <div className="current">
      <p>{props.data.current.temp}</p>
      <Icon type={props.data.current.weather[0].main} />
      <div className="conditions">
        <p>{props.data.current.weather[0].main}</p>
        <p>{props.data.current.wind_speed}mph</p>
      </div>
    </div>
  );
}

export default Current;
