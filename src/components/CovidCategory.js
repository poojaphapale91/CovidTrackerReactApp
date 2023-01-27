import React, { useEffect, useState } from "react";

export default function CovidCategory() {
  const [data, setData] = useState("");
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    //console.log(actualData.statewise[21]);

    setData(actualData.statewise[0]);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <ul>
        <li className="category">
          <div className="card">
            <div className="cardMain" id="country">
              <p>
                Our<span> STATE</span>
              </p>
              <h1>INDIA </h1>
            </div>
          </div>

          <div className="card">
            <div className="cardMain" id="recovered">
              <p>
                TOTAL<span> RECOVERED</span>
              </p>
              <h1>{data.deltarecovered}</h1>
            </div>
          </div>

          <div className="card">
            <div className="cardMain" id="confirmed">
              <p>
                TOTAL<span> CONFIRMED</span>
              </p>
              <h1>{data.confirmed} </h1>
            </div>
          </div>
        </li>

        <li className="category">
          <div className="card">
            <div className="cardMain" id="deaths">
              <p>
                TOTAL<span> DEATH</span>
              </p>
              <h1>{data.deaths} </h1>
            </div>
          </div>

          <div className="card">
            <div className="cardMain" id="active">
              <p>
                TOTAL<span> ACTIVE</span>
              </p>
              <h1>{data.active} </h1>
            </div>
          </div>

          <div className="card">
            <div className="cardMain" id="date">
              <p>
                LAST<span> UPDATED</span>
              </p>
              <h1>{data.lastupdatedtime} </h1>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
