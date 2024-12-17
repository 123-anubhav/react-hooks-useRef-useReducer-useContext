import React, { Fragment, useState, useRef } from "react";
import img1 from '../assets/nature_img.png';

let UseRefHook = () => {

    let refEl = useRef();

    let click = () => {
        console.log("ref for dom ==>" + refEl.current + "element img attributes value =>"
            + refEl.current.src
            + "\n alt " + refEl.current.alt + "\n height " + refEl.current.height + "\n width " + refEl.current.width);
    }

    let enableBtn = (event) => {
        // REAL TIME USE CASE 
        // WHEN YOU CHECK THE CHECKBOX THEN ONLY BUTTON ENABLE TO CLICK
        refEl.current.disabled = !event.target.checked;
    }
    return (
        <Fragment>
            <div className="contianer   mt-3 text-center  ">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card-header text-success text-white h4">
                            useRef() Example -Basics
                            <br />
                            <img src={img1}
                                alt="load img..."
                                height="150"
                                width="150"
                                ref={refEl}
                                className="img-fluid"
                            />
                        </div>
                        <div className="card-body">
                            <p className="lead text-danger h5">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <input type="submit" value="click me" onClick={click} />
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="card-header text-secondary text-white h4">
                            useRef() Example -useCase in realtime
                        </div>
                        <div className="card-body">
                            <form className="form-control">
                                <input type="checkbox" name="terms" onChange={enableBtn} />Accept terms and conditions<br />
                                <button type="submit" ref={refEl} disabled className="btn btn-sm btn-warning">submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default UseRefHook;