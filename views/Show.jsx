import React from 'react'

const Pokemon = require('../models/pokemon')


function Show(props) {
    return (
        <div>
            <title>Show View</title>
            <body style={{backgroundColor:'lightgreen', textAlign: 'center'}}>
            <h1 style={{color: 'green'}}>Pokepedia</h1>
            
            <img src={props.pokemon.img}></img> <br/><br/>
            
            {/* <ul style={{textAlign: 'center'}}>
                {props.pokemon.map((pokemon, index) => 
                    <li style={{listStyle: 'none'}}>
                    <a href={`/pokemon/${index}`}></a>    
                    <h2>
                    {pokemon.name}
                    <br/>
                    <img src={pokemon.img}></img></h2>
                    </li>
                )}
            </ul> */}
            
            <a href={`/pokemon/${props.pokemon._id}/edit`}><button>Edit</button></a>
            
            <br /><br />


            <form action={`/pokemon/${props.pokemon._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>

            <br />

            

            <h2 style={{textAlign: 'center'}}><a href="/">Back Home</a>
            <br/><a href="/pokemon">Directory</a></h2>
            </body>
        
    </div>
    )
}

export default Show;




//FIRST DRAFT BELOW 20032023

// import React from 'react'
// // import DefaultLayout from '../layouts/DefaultLayout'


// function Show(props) {
//     // can't use hooks or state 
//     // can't use event listeners in the same way

//     // console.log(props.pokemon)
//     // //logged successfully from res.render('Index', {pokemon}) in server
//     return (
//         // <DefaultLayout title="Show View">
//             <div>
//                 <title>Show View</title>
//                 <body style={{backgroundColor:'lightgreen'}}>
//                 <div style={{ color: 'green'}}>
//                 <h1 style={{textAlign: 'center', paddingLeft: '40px'}}>Gotta Catch 'Em All! | Poképedia</h1>
//                 </div>

//                 {/* <ul style={{textAlign: 'center'}}>
//                 {props.pokemon.map((pokemon, index) => 
//                     <li style={{listStyle: 'none'}}>
//                         <a href={`/pokemon/${index}`}>
                            
//                         <h2>
//                         {pokemon.name}
//                         <br/>
//                         <img src=
//                         {pokemon.img}></img>
//                         </h2>
//                         </a>
                        
//                     </li>
//                 )}
//             </ul> */}

//             <div><h2 style={{textAlign: 'center'}}><a href="/">Back Home</a>
//             <br/>
//             <a href="/pokemon">Directory</a></h2></div>
            
//             </body>  
//             </div>
//         // </DefaultLayout>
//     )
// }

// export default Show