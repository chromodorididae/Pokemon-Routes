import React from 'react'

// res.send('<h1></h1>')

function Edit(props) {
    return ( 
        <div>
            <body style={{backgroundColor: 'lightgreen'}}>
            <h1 style={{color: 'green'}}>Edit Pokemon</h1>
            <form action={`/pokemon/${props.pokemon._id}?_method=PUT`} method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" defaultValue={props.pokemon.name} /><br /><br />
                <button>Submit</button>

            </form>
            </body>
        </div>
    );
}

export default Edit;