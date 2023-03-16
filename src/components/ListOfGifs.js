import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../responsesApi/getGifs";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
