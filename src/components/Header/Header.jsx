import { Button, Header, Segment } from 'semantic-ui-react';



export default function PageHeader({ loggedUser, handleLogout }) {


    function userButtons () {
        return (
            <>
                <Button href='/login'>Login</Button>
                <Button href='/signup'>Signup</Button>
                <Button onClick={handleLogout}>Logout</Button>
            </>
        )
    }



    return (
        <Segment>
            <Header as='h2' >
                <Button href='/discover'>Discover</Button>
                <Button href='/gallery'>Gallery</Button>

                {  userButtons() }
                
            </Header>
        </Segment>
    )
}