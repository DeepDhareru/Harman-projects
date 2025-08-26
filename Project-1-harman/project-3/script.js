const svg = document.getElementById("drawingArea");
let drawing = false;
let path;

svg.addEventListener("mousedown", (e) => {
  drawing = true;
  const point = getMousePosition(e);
  path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke", "blue");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("fill", "none");
  path.setAttribute("d",` M ${point.x} ${point.y}`);
  svg.appendChild(path);
});

svg.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  const point = getMousePosition(e);
  let d = path.getAttribute("d");
  d += ` L ${point.x} ${point.y}`;
  path.setAttribute("d", d);
});

svg.addEventListener("mouseup", () => {
  drawing = false;
});

svg.addEventListener("mouseleave", () => {
  drawing = false;
});

function getMousePosition(e) {
  const rect = svg.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}