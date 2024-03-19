import { Button, Header, Segment} from 'semantic-ui-react';



export default function PageHeader(){
    return (
        <Segment>
            <Header as='h2' >
              <Button href='/discover'>Discover</Button>
              <Button href='/gallery'>Gallery</Button>
            </Header>
        </Segment>
    )
}