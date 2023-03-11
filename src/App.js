import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [mobiles, setMobiles] = useState([]);
  // const API = "http://localhost:4000";
  const API = "https://node01-production.up.railway.app";
  useEffect(() => {
    fetch(`${API}/mobiles`)
      .then((data) => data.json())
      .then((msg) => setMobiles(msg));
  }, []);
  return (
    <div className="App phone-list-container">
      {mobiles.map((data) => (
        <Phone key={data._id} data={data} />
      ))}
    </div>
  );
}

function Phone({ data }) {
  // const data = {
  //   model: "OnePlus 9 5G",
  //   img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   company: "Oneplus",
  // };
  return (
    <div className="phone-container">
      <img className="phone-picture" src={data.img} alt={data.model} />
      <h1 className="phone-name">{data.model}</h1>
      <p className="phone-company">{data.company}</p>
    </div>
  );
}

export default App;
