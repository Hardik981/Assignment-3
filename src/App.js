import React from "react";
import "./style.css";

export default function App() {
  let data = [{score:75, id:1},{score:54, id:2},{score:96, id:3},{score:82, id:4},{score:66, id:5}]
  return (
    <div>
     {data.map((value)=><h1 key={value.id}>{value.score}</h1>)}
    </div>
  );
}
