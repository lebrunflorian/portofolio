import React from "react";

function Cursor() {
  const mouseCursor = document.querySelector(".cursor");
  const cursor = (e) => {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  };
  window.addEventListener("mousemove", cursor);

  return <div class="cursor"></div>;
}

export default Cursor;
