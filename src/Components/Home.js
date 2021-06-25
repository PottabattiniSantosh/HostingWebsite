import React, {useState} from "react";
import {
    Link
  } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Home() {
  const[showModel, setShowModel]=useState(false);
  const history = useHistory();

  var data=[
    {
      "title":"model1",
      "subtitle":"sub title",
      "text":"Some quick example text to build on the card title"
    },
    {
      "title":"model2",
      "subtitle":"sub title",
      "text":"Some quick example text to build on the card title"
    },
    {
      "title":"model3",
      "subtitle":"sub title",
      "text":"Some quick example text to build on the card title"
    }
  ]

  const togleModel=()=>{
    setShowModel(!showModel)
  }
  const navigateToBlogs=()=>{
    history.push({
      pathname: '/blogs',
      state: {
        "update": true, 
      },
    }); 
  }
    return (
      <div style={{flex:1, backgroundColor:"#1c1b1b", minHeight:"100vh"}} >
      <div className="container text-white" >
        <div className="pt-5" >
          <p className="lead" style={{fontSize:40}}>Pottabattini Santosh Kumar</p>
        </div>
        <div className="row" >
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5" >
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5" >
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={togleModel} >
            <div className="card" style={{width:"24rem", height:"30vh", backgroundColor:"#5c5757"}}>
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <h6 className="card-subtitle mb-2" style={{color:"#bfbaba"}} >Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5" ></div>
        
        <Modal show={showModel} onHide={togleModel} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>

      </div>
        {/* <ul>
            <li>
                <Link to="/blogs">to to my blogs</Link>                
            </li>
            <li>
              <Link to="/about">Learn more about me</Link>
          </li>
      </ul> */}
      </div>
    );
  }