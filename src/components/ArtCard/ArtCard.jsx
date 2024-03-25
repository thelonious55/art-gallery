import { Image, Card, Icon, Button } from 'semantic-ui-react'

export default function ArtCard({artPiece, removeArt}) {
    
    function handleClick() {
        removeArt(artPiece._id)
    }


    return (
        <Card>
            <Image src={artPiece.photoUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{artPiece.title}</Card.Header>
                <Card.Meta>{artPiece.artist}</Card.Meta>
                <Card.Description>
                    {artPiece.description}
                </Card.Description>
                <Icon name='ban' onClick={handleClick}></Icon>
            </Card.Content>
        </Card>
    );
    
}