import { Card, CardActions, CardContent, CardMedia, Typography, IconButton, Chip } from "@mui/material"
import { Favorite } from "@mui/icons-material"
import AnimatedLink from "./AnimatedLink";


// eslint-disable-next-line react/prop-types
function HotelCard({name,image, desc, id}) {
  return (
    <Card sx={{maxWidth: 300, background: '#eee', borderRadius:'24px'}}>
      <CardMedia
        style={{viewTransitionName: `card-image-${id}`}}
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
        <AnimatedLink to={`hotels/${id}`}>
          See Details
        </AnimatedLink>
          <IconButton>
            <Favorite color="error" />
          </IconButton>
          <Chip label="342" />
      </CardActions>
    </Card>
  )
}

export default HotelCard