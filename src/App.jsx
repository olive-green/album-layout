import React from "react";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const App=()=>{
    const photoCameraStyle={marginRight:"20px"};
    const containerStyle={ backgroundColor: "#eae5ee40", padding:"50px"};
    const buttonStyle={marginTop:"40px"}
    const cardContainer={padding:"20px 0"}
    const cardStyle={height:"100%",display:"flex",flexDirection:"column"}
    const cardMediaStyle={paddingTop:"56.25%"};
    const cardContentStyle={flexGrow:1};
    const card=[1,2,3,4,5,6,7,8,9,10];
    return(
        <>
        {/*  It will remove a default margin and padding in body*/}
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera style={photoCameraStyle}/>
                    <Typography variant="h6">
                        PhotoAlbum
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div style={containerStyle}>
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom> {/* gutterBottm will add bottom margin*/}
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph> 
                        {/* paragraph will make h5 into p tag */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit dolorum natus modi eum sit enim asperiores, nulla itaque vitae?
                        </Typography>
                        <div style={buttonStyle}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                        <Button variant="contained" color="primary">
                                            See my photos
                                        </Button>
                                </Grid>
                                <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div>
                    <Container style={cardContainer} maxWidth="md">
                     <Grid container spacing={4}>
                         
                             {
                                 card.map((card)=>(
                                 <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card  style={cardStyle} >
                                        <CardMedia 
                                            style={cardMediaStyle}
                                            image="https://source.unsplash.com/random"
                                            title="Image Title"
                                        />
                                        <CardContent style={cardContentStyle}>
                                            <Typography variant="h5" gutterBottom>
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is media card.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">View</Button>
                                            <Button size="small" color="primary">Edit</Button>
                                        </CardActions>
                                            
                                    
                                </Card>
                            </Grid>
                                 ))
                             }
                                
                     </Grid>   
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;