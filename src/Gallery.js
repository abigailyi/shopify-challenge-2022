import React from "react";
// import axios from "axios";
import "./Gallery.css";
import Photos from "./Photos";
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Gallery() {
  // let [loaded, setLoaded] = useState(null);

  // APOD API Documentation: https://github.com/nasa/apod-api#docs
  // let apiKey = `sBw9DFbr77y8J3hDVajYsX7g7aTfbeLtNWLcQXof`;
  // let apiKey = `cygpx0udAGws3SQtWwJbNrbKUXaYcObluRwL1XpN`;
  // let apiKey = `VrPMtOqpDPWXzFfmCX1ZuUEfkCn42ckfpVB49377`;
  // let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2017-07-08&end_date=2017-07-10`;
  // axios.get(apiUrl).then(displayPhotos);

  // function displayPhotos(response) {
  //   console.log(response.data);
  //   setLoaded(response.data);
  // }

  // if (loaded) {
  return (
    <div className="Gallery">
      <Photos />;
    </div>
  );
  // } else {
  //   return (
  //     <div className="Loading">
  //       <Loader
  //         type="Rings"
  //         color="#FFF"
  //         height={100}
  //         width={100}
  //          timeout={5000} //5 secs
  //        />
  //        <h4>Loading images ...</h4>
  //       </div>
  //    );
  //   }
}
