import React from "react";
// import './Rank.css'


const Rank = ({name, entries}) => {
    return(
      <div>
       <div className="relative Gumball white f3"> 
        {`${name}, your current entry count is...`}
       </div>
       <div className="relative Gumball white f1"> 
        {entries}
       </div>
      </div>
    );
}

export default Rank