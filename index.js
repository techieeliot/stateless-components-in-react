function tick() {
  const element =
  React.createElement("div", null,
  React.createElement("h1", null, "w3develops was here"),
  React.createElement("h2", null, "It is ", new Date().getHours(), "."),
  React.createElement("p", null, "The minute is ", new Date().getMinutes()),
  React.createElement("p", null, "The seconds are ", new Date().getSeconds()));



  ReactDOM.render(
  element,
  document.getElementById('root'));

}

setInterval(tick, 1000);