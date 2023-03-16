import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'


function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way

    // console.log(props.pokemon)
    // //logged successfully from res.render('Index', {pokemon}) in server
    return (
        // <DefaultLayout title="Index View">
            <div>
                <title>Show View</title>
                <body style={{backgroundColor:'lightgreen'}}>
                <div style={{ color: 'green'}}>
                <h1 style={{textAlign: 'center', paddingLeft: '40px'}}>Gotta Catch 'Em All!</h1>
                </div>

                {/* pokemon go below */}
                <ul style={{textAlign: 'center'}}>
                {props.pokemon.map((pokemon, index) => 
                    <li style={{listStyle: 'none'}}>
                        <a href={`/pokemon/${index}`}>
                            
                        <h2>
                        {pokemon.name}
                        <br/>
                        <img src=
                        {pokemon.img}></img>
                        </h2>
                        </a>
                        
                    </li>
                )}
            </ul>
            {/* list style none */}

            <div><h2 style={{textAlign: 'center'}}><a href="/">Back Home</a>
            <br/>
            <a href="/pokemon">Directory</a></h2></div>
            
            </body>  
            </div>
        // </DefaultLayout>
    )
}

export default Index