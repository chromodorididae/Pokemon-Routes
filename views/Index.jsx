import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

// MyClass.findById(req.params.id)



function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        // <DefaultLayout title="Index View">
            <div>
                <title>Index View</title>
                <body style={{ color: 'green', backgroundColor:'lightgreen', textAlign: 'center'}}>
                <h1>Directory
                </h1>
                <ul style={{listStyle: 'none', paddingLeft:'0px', fontSize: '25px'}}>
                    {props.pokemon.map((pokemon, index) => 
                        <li key={index}>
                            <a href={`/pokemon/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
                        </li>
                    )}
                </ul>
                {/* <a href="/pokemon/new">Add...</a> */}
                <a href="/pokemon/new">Add...</a>

                <br/><br/><br/>

                <form action="/pokemon/seed" method="POST">
                    <button>SEED</button>
                </form>

                <br/>

                <form action="/pokemon/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>
                </form>
            <h2>
            <a href="/">Back Home</a>
            <br/>
            <a href="/pokemon/x">Pokèpedia</a>
            {/* POKEPEDIA DISPLAYS IMAGES => SHOW VIEW */}
             </h2>
            </body>
            </div>
       
        // </DefaultLayout>
    )
}

export default Index















//FIRST DRAFT BELOW
// import React from 'react'
// // import DefaultLayout from '../layouts/DefaultLayout'


// function Index(props) {
//     // can't use hooks or state 
//     // can't use event listeners in the same way

//     // console.log(props.pokemon)
//     // //logged successfully from res.render('Index', {pokemon}) in server
//     return (
//         // <DefaultLayout title="Index View">
//             <div>
//                 <title>Index View</title>
//                 <body style={{backgroundColor:'lightgreen'}}>
//                 <div style={{ color: 'green'}}>
//                 <h1 style={{textAlign: 'center', paddingLeft: '40px'}}>See All The Pokemon!</h1>
//                 </div>
//                 <ul style={{textAlign: 'center', fontSize:'25pt'}}>
//                 {props.pokemon.map((pokemon, index) => 
//                     <li style={{listStyle: 'none'}}>
//                         <a href={`/pokemon/${index}`}><strong>
//                         {pokemon.name}
//                         <br/>
//                         {/* <img src=
//                         {pokemon.img}></img> */}
//                         </strong>
//                         </a>
                        
//                     </li>
//                 )}
//             </ul>
//                 {/* pokemon go below */}
//                 {/* <ul style={{textAlign: 'center'}}>
//                 {props.pokemon.map((pokemon, index) => 
//                     <li style={{listStyle: 'none'}}>
//                         <a href={`/pokemon/${index}`}><strong>
//                         {pokemon.name}
//                         <br/>
//                         <img src=
//                         {pokemon.img}></img>
//                         </strong>
//                         </a>
                        
//                     </li>
//                 )}
//             </ul> */}
//             {/* list style none */}
//             <h2>
//             <a href="/">Back Home</a>
//             <br/>
//             <a href="/pokemon/x">Pokèpedia</a>
//             </h2>
//             </body>  
//             </div>
//         // </DefaultLayout>
//     )
// }

// export default Index

// //undefined
// //empty props.pokemon

// //21:09 15032023 Set up your index view to show your pokemon data