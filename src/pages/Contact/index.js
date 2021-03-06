import React from "react";
import "./style.css"

function Contact() {
    return(
    <div className="container">
      <h1 id="h1">Find me here:</h1>
      <br/>
      <div className="contactInfo">    
        <div className="row">
          <div className="col">
            <form className="contactMe" name="contact" data-netlify="true">
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Name</label>
                <textarea className="form-control" name="name" id="exampleFormControlTextarea1" rows="1"></textarea>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea2">Message</label>
                <textarea className="form-control" name="message" id="exampleFormControlTextarea2" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <br/>
      <h4>Email: jjsecomb@gmail.com</h4>
      <h4>Phone Number: 520-444-3746</h4>
      <h4>LinkedIn: <a href="https://www.linkedin.com/in/julian-secomb-74003a4b/"
          className="contactLink">linkedin.com/in/julian-secomb</a> </h4>
      <h4>Github: <a href="https://github.com/jsecomb" className="contactLink">github.com/jsecomb</a></h4>
    </div>
    )
}

export default Contact;