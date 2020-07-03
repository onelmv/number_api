import React from 'react';

const Selector =({input})=>{

  
    return (
        <div className="pt5 ">
            <form >
                <input className="shadow-4"
                        id="year" 
                        type="number" 
                        required 
                        maxLength='4' 
                        size='4' 
                        max='2020' 
                        min="-2000" 
                        placeholder="year"
                        onChange={input}
                />
                {/* <input type="submit" value="submit"/> */}
            </form>
        </div>
    );
}

export default Selector