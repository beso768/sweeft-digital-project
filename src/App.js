import axios from "axios";
import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const reactObserver = useRef();

  useEffect(() => {
    setLoading(true);
    axios(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/12`
    ).then((response) => {
      setData((prevData) => [...prevData, ...response.data.list]);
      setLoading(false);
    });
  }, [page]);
  console.log(data);

  return (
    <div className="App">
      <ul>
        {data?.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      {loading && <h1>Loadin...</h1>}
      <button onClick={() => setPage((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default App;
