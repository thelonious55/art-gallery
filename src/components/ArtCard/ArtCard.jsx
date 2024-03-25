import { Image, Card } from 'semantic-ui-react'

export default function ArtCard({artPiece, art}) {
    
    return (
        <Card>
            <Image src={artPiece.photoUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{artPiece.title}</Card.Header>
                <Card.Meta>{artPiece.artist}</Card.Meta>
                <Card.Description>
                    {artPiece.description}
                </Card.Description>
            </Card.Content>
        </Card>
    );
    
}