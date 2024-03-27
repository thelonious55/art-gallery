import { Image, Card, Icon, Button } from 'semantic-ui-react'

export default function ArtCard({artPiece, removeArt}) {
    
    function handleClick() {
        removeArt(artPiece._id)
    }


    return (
        <Card>
            <Image src={artPiece.photoUrl} wrapped ui={false} size='small'/>
            
                
            <Icon name='ban' onClick={handleClick}></Icon>
            
        </Card>
    );
    
}