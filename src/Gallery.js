import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";
import LikeIcon from "./LikeIcon";
import ReactPlayer from "react-player";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Gallery() {
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function handleResponse(response) {
    setImages(response.data);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, []);

  // Format the date to yyyy-MM-dd for API's fields
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  // Mapping out API's response array in reverse to order from most recent
  // to least recent. Added if/else statement to format HTML for video formats
  if (loaded) {
    return (
      <div className="Gallery">
        {images
          .slice()
          .reverse()
          .map(function (daily, index) {
            if (daily.media_type === "video") {
              return (
                <div className="Card" key={index}>
                  <div className="row">
                    <div className="image-card">
                      <ReactPlayer url={daily.url} width="100%" />
                      <br />
                      <h3>{daily.date}</h3>
                      <h2>{daily.title}</h2>
                      <br />
                      <p id="desc">{daily.explanation}</p>
                      <br />
                      <div className="col">
                        <p id="copyright">Copyright: {daily.copyright}</p>
                        <LikeIcon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="Card" key={index}>
                  <div className="row">
                    <div className="image-card">
                      <img
                        src={daily.url}
                        alt={daily.title}
                        className="card-img"
                      />
                      <br />
                      <h3 id="date">{daily.date}</h3>
                      <h2 id="title">{daily.title}</h2>
                      <br />
                      <p id="desc">{daily.explanation}</p>
                      <br />
                      <div className="col">
                        <p id="copyright">Copyright: {daily.copyright}</p>
                        <LikeIcon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    );
  } else {
    // Pulling latest 10 days of photos from APOD API
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    let startDay = formatDate(date);
    const lastD = new Date(year, month, day - 9);
    let endDay = formatDate(lastD);

    let apiKey = `sBw9DFbr77y8J3hDVajYsX7g7aTfbeLtNWLcQXof`;
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${endDay}&end_date=${startDay}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div>
        <Loader
          type="Rings"
          color="#FFFFFF"
          height={100}
          width={100}
          timeout={7000} // 7 secs
        />
        <h3>LOADING ...</h3>
      </div>
    );
  }
}
