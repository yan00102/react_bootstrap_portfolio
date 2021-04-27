import React from "react";
import { useSpring, animated } from "react-spring";
import "../style/CardInfo.css";

export default function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="card_info" style={style}>
      <p className="card_title">{props.title}</p>
      <p className="card_subTitle">{props.subTitle}</p>
      <a className="card_link" href={props.link}>
        Github Repo
      </a>
      <p className="card_introduction">{props.introduction}</p>
    </animated.div>
  );
}
