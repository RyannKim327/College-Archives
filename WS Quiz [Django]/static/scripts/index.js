"use strict";

function setBackground(id) {
  const img = document.getElementById(id);
  document.body.style.backgroundImage = `url('${img.src}')`;
}
