//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter({
  onesPlace,
  tensPlace,
  hundredsPlace,
  thousandsPlace,
  tenThousandsPlace,
  hundredThousandsPlace,
}) {
  return (
    <div className="container">
      <div className="">
        <i className="far fa-clock"></i>
      </div>
      <div className="s hundredThousands">{hundredThousandsPlace}</div>
      <div className="s tenThousands">{tenThousandsPlace}</div>
      <div className="s thousands">{thousandsPlace}</div>
      <div className="s hundreds">{hundredsPlace}</div>
      <div className="s tens">{tensPlace}</div>
      <div className="s ones">{onesPlace}</div>
    </div>
  );
}

let counter = 0;
setInterval(function () {
  const hundredThousands = Math.floor(counter / 100000 % 10);
  const tenThousands = Math.floor(counter / 10000 % 10);
  const thousands = Math.floor(counter / 1000 % 10);
  const hundreds = Math.floor(counter / 100 % 10);
  const tens = Math.floor(counter / 10 % 10);
  const ones = Math.floor(counter / 1 % 10);
  console.log(ones);
  counter++;

  ReactDOM.render(
    <SimpleCounter
      onesPlace={ones}
      tensPlace={tens}
      hundredsPlace={hundreds}
      thousandsPlace={thousands}
      tenThousandsPlace={tenThousands}
      hundredThousandsPlace={hundredThousands}
       />,
    document.querySelector("#app")
  );
}, 1000);

