import React from "react";
import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName = "shakeAndBake", images }) {
  //const img = images && images[0] && images[0].small && images[0].small.url;

  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h3>{name}</h3>
      <p>NickName: {nickName}</p>
    </div>
  );
}
