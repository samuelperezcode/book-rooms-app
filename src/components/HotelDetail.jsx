import { useQuery } from "@tanstack/react-query"
import { useRoute } from "wouter"
import getHotelById from "../services/getHotelById"
import Spiner from "./Spiner"
import BookingForm from "./BookingForm"
import { Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material"

function HotelDetail() {
  const [match, params] = useRoute('/hotels/:id')
  const {
    data: hotel,
    isLoading,
    error
  } = useQuery({queryKey:["hotel", params?.id], queryFn:() => getHotelById(params?.id)})

  return (
    <>
      {
      isLoading ? <Spiner />
                : error ? <h3>Error fetching data, {error.message}</h3>
                        : (
                          <Card sx={{maxWidth: 345, background: '#e8e8e8' }}>
                            <CardMedia
                              sx={{height: 140}}
                              image={hotel.image}
                              title={hotel.name}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div" >
                                {hotel.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {hotel.desc}
                              </Typography>
                            </CardContent>
                            <CardActions>
                                <BookingForm hotel={hotel} />
                            </CardActions>
                          </Card>
                        )
      }
    </>
  )
}

export default HotelDetail