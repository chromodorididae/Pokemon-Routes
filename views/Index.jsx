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
                <title>Index View</title>
                <body style={{backgroundColor:'lightgreen'}}>
                <div style={{ color: 'green'}}>
                <h1 style={{textAlign: 'center', paddingLeft: '40px'}}>See All The Pokemon!</h1>
                </div>
                <ul style={{textAlign: 'center', fontSize:'25pt'}}>
                {props.pokemon.map((pokemon, index) => 
                    <li style={{listStyle: 'none'}}>
                        <a href={`/pokemon/${index}`}><strong>
                        {pokemon.name}
                        <br/>
                        {/* <img src=
                        {pokemon.img}></img> */}
                        </strong>
                        </a>
                        
                    </li>
                )}
            </ul>
                {/* pokemon go below */}
                {/* <ul style={{textAlign: 'center'}}>
                {props.pokemon.map((pokemon, index) => 
                    <li style={{listStyle: 'none'}}>
                        <a href={`/pokemon/${index}`}><strong>
                        {pokemon.name}
                        <br/>
                        <img src=
                        {pokemon.img}></img>
                        </strong>
                        </a>
                        
                    </li>
                )}
            </ul> */}
            {/* list style none */}
            <h2>
            <a href="/">Back Home</a>
            <br/>
            <a href="/pokemon/x">Pokèpedia</a>
            </h2>
            </body>  
            </div>
        // </DefaultLayout>
    )
}

export default Index

//undefined
//empty props.pokemon

//21:09 15032023 Set up your index view to show your pokemon data


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>My Pokemon App</title>
// </head>
// <body>
//     <h1>See All The Pokemon!</h1>
// <div style={{ color: 'violet'}}><h1>See All The Pokemon!</h1>
// </div>
    
// </body>
// </html>

// export default Index