import { useState, useEffect } from "react"
import ArtCard from "../../components/ArtCard/ArtCard"
import { Segment, Grid } from "semantic-ui-react"
import PageHeader from '../../components/Header/Header'
import DiscoverFeed from "../../components/DiscoverFeed/DiscoverFeed"

export default function DiscoverPage ({loggedUser, handleLogout}) {
    
    const [artData, setArtData] = useState([])
    const [loading, setLoading] = useState(true)

    


    useEffect(() => {
        const apiEndPoint = 'https://api.artic.edu/api/v1/artworks?limit=9'
        



        async function findArt() {
            try{
                setLoading(true)
                const response = await fetch(apiEndPoint)
                const data = await response.json()
                console.log(data, 'from the API')
                const artLinks = data.data.map((e) => {
                    return (data.config.iiif_url + '/' + e.image_id + '/full/843,/0/default.jpg'
                    )
                })
                setArtData(artLinks)
            } catch(err) {
                console.log(err)
            }
            setLoading(false)
        }

        findArt()
    }, [])
    
    
    
    
    
    
    
    
    
    
    return (
        <Segment>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout}/>
            {loading ? <h3>loading</h3> : <DiscoverFeed artData={artData} />}
        </Segment>
        
        
    ) 
}