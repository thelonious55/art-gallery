import { useState, useEffect } from "react"
import ArtCard from "../../components/ArtCard/ArtCard"
import { Segment } from "semantic-ui-react"

export default function DiscoverPage () {
    
    const [artData, setArtData] = useState({})
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        const apiEndPoint = 'https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id'
        



        async function findArt() {
            try{
                setLoading(true)
                const response = await fetch(apiEndPoint)
                const data = await response.json()
                console.log(data, 'from the API')
                setArtData(data)
            } catch(err) {
                console.log(err)
            }
            setLoading(false)
        }

        findArt()
    }, [])
    
    
    
    
    
    
    
    
    
    
    return (
        <Segment>
            {loading ? <h3>loading</h3> : <ArtCard art={artData} />}
        </Segment>
        
        
    ) 
}