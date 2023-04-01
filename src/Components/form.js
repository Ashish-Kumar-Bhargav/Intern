import React from 'react'
import "./form.css"
import Vector from "./Vector.png"
import A from "./a.png"
import B from "./aa.png"
import C from "./b.png"
import D from "./bb.png"
import E from "./c.png"
export default function form() {
    return (
        <>
            <div className="row">
                <div className="col-md-1">
                    <div className="images">
                        <img className='image' src={B} style={{ width: "27px" }}></img>
                        <img className='image' src={D} style={{ width: "27px", height: "22px" }}></img>
                        <img className='image' src={Vector} style={{ width: "27px" }}></img>
                        <img className='image' src={A} style={{ width: "27px" }}></img>
                        <img className='image2' src={E} style={{ width: "27px", height: "22px" }}></img>
                        <img className='image1' src={C} style={{ width: "36px" }}></img>
                    </div>
                </div>

                <div className="col-md-2">
                    <br></br>
                    <i className="fa-solid fa-chevron-left"></i>
                    <h6>Settings</h6>
                    <br></br>
                    <br></br>
                    <br></br>
                    <i className='fas fa-pen' style={{ fontSize: '18px' }}></i>
                    <h6>Edit Profile</h6>
                    <br></br>
                    <i className="fa-sharp fa-solid fa-bell"></i>
                    <h6>Notification</h6>
                    <br></br>
                    <i className='fas fa-lock' style={{ fontSize: '18px' }}></i>
                    <h6>Security   </h6>
                    <br>
                    </br>
                    <i className="fa-sharp fa-solid fa-gear" style={{ fontSize: '18px' }}></i>
                    <h6>Appearance</h6>
                    <br>
                    </br>
                    <i className="fa fa-question" aria-hidden="true"></i>
                    <h5>Help</h5>
                </div>

                <div className="col-md-8">
                    <div className="row g-3">
                        <i className="fa-sharp fa-solid fa-bell"></i>

                        <h3 style={{ textAlign: "left", marginTop: "36px" }}>Edit Profile</h3>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4" >First Name</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Mehrab" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Last Name</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Bozorgi" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Email</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Mehrabbozorgi.business@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Mobile Number</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="9876543210" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4" >College Start Date</label>
                            <input type="date" className="form-control" id="inputEmail4" placeholder="01/01/1990" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">College End Date</label>
                            <input type="date" className="form-control" id="inputPassword4" placeholder="01/01/1990" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Resume</label>
                            <input className="form-control" id="exampleInputPassword1" placeholder="Upload File" type='file' />
                        </div>
                        <button className="button1" role="button">Cancel</button>
                        <button className="button2" role="button">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
