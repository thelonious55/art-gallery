import PageHeader from "../../components/Header/Header"
import AddArtForm from "../../components/AddArtForm/AddArtForm"
import { useEffect, useState } from 'react'
import tokenService from "../../utils/tokenService"

import GalleryFeed from "../../components/GalleryFeed/GalleryFeed"


export default function GalleryPage({loggedUser, handleLogout}) {

    const [artPieces, setArtPieces] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleAddArt(artToSendToServer) {
        console.log(artToSendToServer, " formData from addArt form")

        try {
            // Since we are sending a photo
            // we are sending a multipart/formdData request to express
            // so express needs to have multer setup on this endpoint!
            const response = await fetch('/api/art', {
                method: 'POST',
                body: artToSendToServer, // < No jsonify because we are sending a photo
                headers: {
                    // convention for sending jwts, tokenService is imported above
                    Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage 
                    //and and it to our api request
                    // so the server knows who the request is coming from when the client is trying to make a POST
                }
            })

            const data = await response.json();
            //       res.status(201).json({ post }); this value is from express/posts/create controller
            console.log(data, ' response from post request! This from express')
            setArtPieces([data.art, ...artPieces])

        } catch (err) {
            console.log(err.message)
            console.log('CHECK YOUR SERVER TERMINAL!!!!')
        }

    }


    async function getArt() {
        try {
            setLoading(true)
            const response = await fetch('/api/art', {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                }
            })

            const data = await response.json()
            setLoading(false)
            console.log(data)
            setArtPieces(data.art)
            
        } catch (err) {
            console.log(err)
        }
    }

   
    async function removeArt(artId) {
        try {
            const response = await fetch(`/api/art/${artId}`, {
                method: 'DELETE',
                headers: {
                  // convention for sending jwts in a fetch request
                  Authorization: "Bearer " + tokenService.getToken(),
                  // We send the token, so the server knows who is making the
                  // request
                } 
              })

              const data = await response.json()
              getArt()
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getArt()

    }, [])

    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout}/>

            {loading ? <h1>loading</h1> :

                <>

                    <AddArtForm handleAddArt={handleAddArt} />
                    
                    <GalleryFeed artPieces={artPieces} removeArt={removeArt}/>

                </>

            }




        </>

    )
}