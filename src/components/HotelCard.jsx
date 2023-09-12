import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import {Link} from 'wouter'

// eslint-disable-next-line react/prop-types
function HotelCard({name,image, desc, id}) {
  return (
    <Card sx={{maxWidth: 345, background: '#e8e8e8' }}>
      <CardMedia
        sx={{height: 140}}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
          <Link href={`hotels/${id}`} >
                  <Button size="small">See Details</Button>
          </Link>
      </CardActions>
    </Card>
  )
}

export default HotelCard