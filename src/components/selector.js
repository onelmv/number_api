import React from 'react';

const Selector =({input})=>{

  
    return (
        <div >
            <form >
                <input  id="year" 
                        type="number" 
                        required 
                        maxLength='4' 
                        size='10' 
                        max='2020' 
                        min="-2000" 
                        placeholder="Year"
                        onChange={input}
                />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

export default Selector