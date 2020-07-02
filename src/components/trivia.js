import React from 'react';

const Trivia = ({data})=>{
    if(data!==""){
        return(
            <div>
                <p>{data.year}</p>
                
                {/* Phrase capitilized */}
                <p>{data.trivia.charAt(0).toUpperCase()+data.trivia.slice(1)}</p>
            </div>
        )
        
    }else{
        return ""
    }
}

export default Trivia;