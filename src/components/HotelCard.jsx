import { Button, Card, CardActions, CardContent, CardMedia, Typography, IconButton } from "@mui/material"
import { Favorite } from "@mui/icons-material"

import {Link} from 'wouter'

// eslint-disable-next-line react/prop-types
function HotelCard({name,image, desc, id}) {
  return (
    <Card sx={{maxWidth: 345, background: '#eee', borderRadius:'24px'}}>
      <CardMedia
        sx={{height: 200}}
        image={image}
        title={name}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingBottom: 2}}>
          <Link href={`hotels/${id}`} >
            <Button 
              size="medium" 
              variant="contained" 
              sx={{
                bgcolor:'#f6c90e',
                ":hover":{bgcolor:"#cda607"}
              }}
            >
              See Details
            </Button>
          </Link>
          <IconButton>
            <Favorite color="error" />
          </IconButton>
      </CardActions>
    </Card>
  )
}

export default HotelCard