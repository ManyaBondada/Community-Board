import React from "react";
import './Song.css'

const Song = (props) => { 
    return(
        <div className="Song">
            <img className="image"src = {props.image}></img>
            <p className="name"> Song: {props.name}</p>
            <p className="artist"> Artist: {props.artist}</p>
            <a href={props.button}>
            <button className="button">Click to listen!</button>
            </a>
        </div>
    )
}


export default Song;