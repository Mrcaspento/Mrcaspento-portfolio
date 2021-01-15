import React from "react";
import Champ from "../../assets/images/github.jpg"


const ProfilePic =() => {

    return (
      <>
    <div>
      <img src={Champ} alt="selfie" style={{width: 220, height: 200}}className="card-img-top-img-fluid" />
    </div>
    </>
  );
}

export default ProfilePic;