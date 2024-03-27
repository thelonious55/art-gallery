import { Image, Card, Icon, Button, Modal, ModalHeader, ModalContent, ModalActions } from 'semantic-ui-react'

export default function ArtCard({artPiece, removeArt}) {
    
    function handleClick() {
        removeArt(artPiece._id)
    }


    // <Icon name='ban' onClick={handleClick}></Icon>
    // <Image src={artPiece.photoUrl} wrapped ui={false} size='small'/>


    return (
        <Card>
            
            <Modal
                trigger={<Image src={artPiece.photoUrl} wrapped ui={false} size='small'/>}
            >
                <ModalHeader>Insights</ModalHeader>
                <ModalContent>
                    <h4>Artist: {artPiece.artist}</h4>
                    <h4>Year Created: {artPiece.year}</h4>
                    <h4>Piece Description: {artPiece.info}</h4>
                </ModalContent>
                <ModalActions>
                    <Button onClick={handleClick}>Delete Piece</Button>
                </ModalActions>
            </Modal>
            
        </Card>
    );
    
}