import React from "react";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import fourth from "./fourth.png";
import "./Card.css";

export default function Card() {
  return (
    <div className="Card">
      <div className="image-card">
        <img src={first} alt="" className="card-img" />
        <br />
        <h3>2021-09-19</h3>
        <h2>Rings and Seasons of Saturn</h2>
        <br />
        <p id="desc">
          On Saturn, the rings tell you the season. On Earth, Wednesday marks an
          equinox, the time when the Earth's equator tilts directly toward the
          Sun. Since Saturn's grand rings orbit along the planet's equator,
          these rings appear most prominent -- from the direction of the Sun --
          when the spin axis of Saturn points toward the Sun. Conversely, when
          Saturn's spin axis points to the side, an equinox occurs and the
          edge-on rings are hard to see from not only the Sun -- but Earth. In
          the featured montage, images of Saturn between the years of 2004 and
          2015 have been superposed to show the giant planet passing from
          southern summer toward northern summer. Saturn was as close as it can
          get to planet Earth last month, and this month the ringed giant is
          still bright and visible throughout much of the night.
        </p>
        <br />
        <i className="fas fa-heart fa-lg"></i>
        <p id="copyright">Copyright: Damian Peach</p>
      </div>
      <br />
      <div className="image-card">
        <img src={second} alt="" className="card-img" />
        <br />
        <h3>2021-09-19</h3>
        <h2>Rings and Seasons of Saturn</h2>
        <br />
        <p id="desc">
          On Saturn, the rings tell you the season. On Earth, Wednesday marks an
          equinox, the time when the Earth's equator tilts directly toward the
          Sun. Since Saturn's grand rings orbit along the planet's equator,
          these rings appear most prominent -- from the direction of the Sun --
          when the spin axis of Saturn points toward the Sun. Conversely, when
          Saturn's spin axis points to the side, an equinox occurs and the
          edge-on rings are hard to see from not only the Sun -- but Earth. In
          the featured montage, images of Saturn between the years of 2004 and
          2015 have been superposed to show the giant planet passing from
          southern summer toward northern summer. Saturn was as close as it can
          get to planet Earth last month, and this month the ringed giant is
          still bright and visible throughout much of the night.
        </p>
        <br />
        <i className="far fa-heart fa-lg"></i>
        <p id="copyright">Copyright: Damian Peach</p>
      </div>
      <br />
      <div className="image-card">
        <img src={third} alt="" className="card-img" />
        <br />
        <h3>2021-09-19</h3>
        <h2>Rings and Seasons of Saturn</h2>
        <br />
        <p id="desc">
          On Saturn, the rings tell you the season. On Earth, Wednesday marks an
          equinox, the time when the Earth's equator tilts directly toward the
          Sun. Since Saturn's grand rings orbit along the planet's equator,
          these rings appear most prominent -- from the direction of the Sun --
          when the spin axis of Saturn points toward the Sun. Conversely, when
          Saturn's spin axis points to the side, an equinox occurs and the
          edge-on rings are hard to see from not only the Sun -- but Earth. In
          the featured montage, images of Saturn between the years of 2004 and
          2015 have been superposed to show the giant planet passing from
          southern summer toward northern summer. Saturn was as close as it can
          get to planet Earth last month, and this month the ringed giant is
          still bright and visible throughout much of the night.
        </p>
        <br />
        <i className="fas fa-heart fa-lg"></i>
        <p id="copyright">Copyright: Damian Peach</p>
      </div>
      <br />
      <div className="image-card">
        <img src={fourth} alt="" className="card-img" />
        <br />
        <h3>2021-09-19</h3>
        <h2>Rings and Seasons of Saturn</h2>
        <br />
        <p id="desc">
          On Saturn, the rings tell you the season. On Earth, Wednesday marks an
          equinox, the time when the Earth's equator tilts directly toward the
          Sun. Since Saturn's grand rings orbit along the planet's equator,
          these rings appear most prominent -- from the direction of the Sun --
          when the spin axis of Saturn points toward the Sun. Conversely, when
          Saturn's spin axis points to the side, an equinox occurs and the
          edge-on rings are hard to see from not only the Sun -- but Earth. In
          the featured montage, images of Saturn between the years of 2004 and
          2015 have been superposed to show the giant planet passing from
          southern summer toward northern summer. Saturn was as close as it can
          get to planet Earth last month, and this month the ringed giant is
          still bright and visible throughout much of the night.
        </p>
        <br />
        <i className="far fa-heart fa-lg"></i>
        <p id="copyright">Copyright: Damian Peach</p>
      </div>
      <br />
      <br />
    </div>
  );
}
