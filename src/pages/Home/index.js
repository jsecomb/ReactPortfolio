import React from "react";
import "./style.css"

function Home() {
    return(
    <div className="container"> 
        <h1 id="h1">Bio</h1>
        <br/>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid bioImage" alt="bioImage" src="https://images.squarespace-cdn.com/content/v1/5b94a40a697a9812941c46e8/1563658668336-L3KHYUJFJCXS0SFTBWHE/ke17ZwdGBToddI8pDm48kOJKmLo_FBmFgq96Wj3pHHZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k9kZPbuygN4RSDPe_G5PO-pGSUmFejYyNdldZUsgA1geY3EYMDizs3YOd-BypEwww/ShopPortrait.jpeg?format=1000w"></img>
          </div>
          
          <div className="col-sm-12 col-md-6">
            <div className="textContainer">
              <h2>JULIAN SECOMB</h2>
              <p> I am a software developer, woodworker, and designer living in Tucson, AZ. My goal is to gain experience in every level of application development, from back-end architecture and database structure to user experience and design. I hope to use my experience designing and building physical products to create engaging applications that feel multidimensional.
              </p>
              <br/>
                <h4>
                  <a href="https://drive.google.com/file/d/10NqYmi4yDboUT-PbutGw6PxQLM59bNWo/view?usp=sharing" className="portfolioLink">Resume</a>
                </h4>
            </div>
          </div>
        </div> 
      </div>
    )
}

export default Home;