import { Card } from 'semantic-ui-react'
import ArtCard from '../ArtCard/ArtCard'

export default function GalleryFeed({artPieces, removeArt}) {

    return (
        <Card.Group>
            {artPieces.map((artPiece, index) => (
                <ArtCard key={index} artPiece={artPiece} removeArt={removeArt}/>
            ))}
        </Card.Group>
    );
}