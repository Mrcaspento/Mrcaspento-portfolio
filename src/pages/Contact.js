import React from "react";

import ProfilePic from "../components/Champ";

const Contact = () => (
    <>
    <div>
  <h2>Contact Info</h2>
  <div className="card mb-3" style={{width: 600}}>
        <div className="row no-gutters">
          <div className="col-md-4">
           <ProfilePic  />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <section id="contact-info">
                <h2>Contact Info</h2>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:Mrcaspento@gmail.com">Mrcaspento@gmail.com</a></li>
                  <li><strong>Github:</strong> <a href="https://mrcaspento.github.io/">Mrcaspento.github.io</a>
                  </li>
                  <li><strong>Twiter:</strong> <a href="https://twitter.com/UnusualCaspento">UnusualCaspento</a></li>
                  <li><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/matthew-caspento-6358671b6/">Matthew Caspento</a></li>
                  <li><strong>Resume:</strong> <a href="../assets/pdf/Resume.pdf">Resume</a></li>
                </ul>
              </section>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
   </div>
  </>
);

export default Contact;