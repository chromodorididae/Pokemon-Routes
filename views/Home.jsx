import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'


function Home(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way

    // console.log(props.pokemon)
    // //logged successfully from res.render('Index', {pokemon}) in server
    return (
            <div style={{textAlign: 'center'}}>
                <title>Home View</title>
                <body style={{backgroundColor:'violet'}}>
                <div style={{ color: 'black'}}>
                <h1 style={{textAlign: 'center', paddingLeft: '40px'}}>HOMEPAGE</h1>
                <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/677/140/bd8.gif"/>
                <br />
                <h2>
                <a href="/pokemon">Index View</a>
                <br />
                {/* <a href="/pokemon/:id">Show View</a> */}
                </h2>
                </div>
                {props.children}
            </body>  
            </div>
    )
}

export default Home

//IMAGE SOURCE: https://knowyourmeme.com/photos/677140-pokemon