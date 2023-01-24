import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const MyPhotos = () => {
  let storeImg = JSON.parse(localStorage.getItem('myFavorite'))
  return (
    <>
     <CssBaseline />
      <Container fixed>
        <Box sx={{ height: '100vh' }}> 
        <Grid container spacing={{ xs: 2, md: 3,  }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {storeImg.map((item)=>(  
            <Grid item xs={2} sm={2} md={2} key={item.id}>
            <Card sx={{ maxWidth: 180,marginTop:10,marginBottom:5 }}>
                  <CardMedia
                    sx={{ height: 180 }}
                    image={item.img}
                  />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </Grid>
            ))
          }
          </Grid>

        </Box>
      </Container>
    
  </>
  )
}

export default MyPhotos