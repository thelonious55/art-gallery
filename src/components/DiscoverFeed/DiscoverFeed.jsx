import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import ArtCard from '../ArtCard/ArtCard'


export default function DiscoverFeed({artData}) {
    return (
        <Grid>
            <GridRow columns={3}>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
            </GridRow>
            <GridRow columns={3}>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
            </GridRow>
            <GridRow columns={3}>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
                <GridColumn>
                    <ArtCard artData={artData}/>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}