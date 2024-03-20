import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react'
import ArtCard from '../ArtCard/ArtCard'
import './DiscoverFeed.css'

export default function DiscoverFeed({ artData }) {
   
   function handleError(e) {
    console.log('something here')
    e.target.remove()
   }
   
   const artCards = artData.map((art) => {
    return <ArtCard art={art} key={art._id}/>
   })
   
    return (
        <Grid>
            <GridRow columns={3}>
                <GridColumn>
                    <Image src={artData[0]} className='randomArt' referrerPolicy="no-referrer"/>
                </GridColumn>
                <GridColumn>
                    <Image src={artData[1]} className='randomArt' referrerPolicy="no-referrer" onError={handleError}/>
                </GridColumn>
                <GridColumn>
                    <Image src={artData[2]} className='randomArt' referrerPolicy="no-referrer" onError={handleError}/>
                </GridColumn>
            </GridRow>
            <GridRow columns={3}>
                <GridColumn>
                    <Image src={artData[3]} className='randomArt' referrerPolicy="no-referrer"/>
                </GridColumn>
                <GridColumn>
                    <Image src={artData[4]} className='randomArt' referrerPolicy="no-referrer"/>
                </GridColumn>
                <GridColumn>
                    <Image src={artData[5]} className='randomArt' referrerPolicy="no-referrer"/>
                </GridColumn>
            </GridRow>
            <GridRow columns={3}>
                <GridColumn>
                    <Image src={artData[6]} className='randomArt' referrerPolicy="no-referrer"/>
                </GridColumn>
                <GridColumn>
                    <Image src={artData[7]} className='randomArt' referrerPolicy="no-referrer"/>
                </GridColumn>
                <GridColumn>
                    <Image src={artData[8]} className='randomArt' referrerPolicy="no-referrer"/>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}