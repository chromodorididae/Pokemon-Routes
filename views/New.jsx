import React from 'react'

function New() {
    return ( 
        <div>
            <body style={{backgroundColor: 'lightgreen'}}>
            <h1 style={{color: 'green'}}>New Pokemon</h1>
            <form action="/pokemon" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />
                <button>Submit</button>
            </form>
            </body>
        </div>
    );
}

export default New;