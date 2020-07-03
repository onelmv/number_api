import React from 'react';

const Trivia = ({data})=>{
    if(data!==""){
        return(
            <div className="">
                <p className="garamond f1">{data.year}</p>
                
                {/* Phrase capitilized */}
                <p className="baskerville  f2 ph7">{data.trivia.charAt(0).toUpperCase()+data.trivia.slice(1)}</p>
            </div>
        )
        
    }else{
        return ""
    }
}

export default Trivia;