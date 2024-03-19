import { Image } from 'semantic-ui-react'

export default function ArtCard({art}) {
    console.log(art.config,)
    let imageSrc = art.config.iiif_url + '/' + art.data.image_id + '/full/843,/0/default.jpg'

    
    
    console.log(imageSrc)

    return(
        <Image src={imageSrc}></Image>
    )
}