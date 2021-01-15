import React from 'react'
import ProfilePic from "../Champ/index";

const Card = () =>{
    return (
      <>
      <div className="row d-flex">
      <div className="col-md-4">
      <ProfilePic />
      </div>
      <div className="col-md-6 bg- flex-row-reverse">
          <h5 className=" h4 card-title">Matthew Caspento</h5>
          <p className="card-text">Born in Newark, NJ in 1994.I lived there for 5 years before my
              parents decided to move my twin sister and me to South Carolina looking for a
              better
              life, or avoid paying higher taxes. Grew up in Myrtle Beach, Sc and went to
              Coastal
              Carolina Unversity for Biochemistery until 2018 where I moved to Charlotte, NC
              and
              decided to become a bar manager. Where I also had a pop-up bar in Charlotte at
              the
              Discovery Place</p>
          <p className="card-text"><small className="text-muted"></small></p>
      </div>
  </div>
  </>
      );
}
export default Card;