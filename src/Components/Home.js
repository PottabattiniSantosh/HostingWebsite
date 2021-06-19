import React from "react";
import {
    Link
  } from "react-router-dom";

export default function Home() {
    return (
      <>
        <p>This is Home Page</p>
        <ul>
            <li>
                <Link to="/blogs">to to my blogs</Link>                
            </li>
            <li>
                <Link to="/about">Learn more about me</Link>
            </li>
        </ul>
      </>
    );
  }