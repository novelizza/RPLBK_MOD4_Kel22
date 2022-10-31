import React from "react";
import axios from "axios";
import { RootContext } from "../App";

function Tugas() {
  const [state, setState] = React.useState("");
  const [state2, setState2] = React.useState([]);
  const [ubah, setUbah] = React.useState(1);

  React.useEffect(() => {
    async function restData() {
      const getData = await axios
        .get("https://jakpost.vercel.app/api/category/indonesia")
        .then((data) => setState2(data.data.posts))
        .catch((er) => console.log(er.response));

      return getData;
    }
    if (ubah > 1) {
      restData();
    } else {
      setTimeout(setUbah(2), 10000);
    }
  }, [ubah]);

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "col",
        backgroundColor: "#22a",
        width: "50%",
      }}
    >
      <div
        style={{
          backgroundColor: "#bb1",
          height: 250,
          borderRadius: 25,
          paddingLeft: 5,
        }}
      >
        <h1>Tugas Use State</h1>
        <input
          onChange={(data) => setState(data.target.value)}
          placeholder="Isi teks disini..."
          style={{ width: "50%" }}
        />
        <h1>{state}</h1>
      </div>

      <div
        style={{
          backgroundColor: "#f2f",
          height: 275,
          borderRadius: 25,
          paddingLeft: 5,
        }}
      >
        <h1>Tugas Use Effect</h1>
        {state2.length === 0 ? (
          <p>Loading Data, Using UseEffect</p>
        ) : (
          state2.map((data, i) => {
            return (
              <div key={i}>
                <span>{data.title.slice(0, 50) + "..."}</span>
                <br />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Tugas;