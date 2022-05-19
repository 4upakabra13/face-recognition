import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return(
      <div className="">
        <p className="relative f4 Gumball white">
            {'This Magic Brain detects faces in your pictures. Give it a try'}
        </p>
        <div className="form">
            <div className="form-box pa4 br3 ">
                <input type="text" className="f4 pa2 w-70" onChange={onInputChange}/>
                <button
                className="w-40 grow f4 link pointer pv2 dib white bg-purple Gumball"
                onClick={onSubmit}
                >Detect!</button>
            </div>    
        </div>
      </div>
    );
}

export default ImageLinkForm