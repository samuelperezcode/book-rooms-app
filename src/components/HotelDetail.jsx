import { useQuery } from "@tanstack/react-query"
import { useRoute, useLocation } from "wouter"
import getHotelById from "../services/getHotelById"
import Spiner from "./Spiner"
import BookingForm from "./BookingForm"
import { IconButton, Typography, Chip} from "@mui/material"
import { ArrowBack, Favorite } from "@mui/icons-material"

function HotelDetail() {
  const [match, params] = useRoute('/hotels/:id')
  const {
    data: hotel,
    isLoading,
    error
  } = useQuery({queryKey:["hotel", params?.id], queryFn:() => getHotelById(params?.id)})
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setLocation('/')
  }

  return (
    <>
      {
      isLoading ? <Spiner />
                : error ? <h3>Error fetching data, {error.message}</h3>
                        : (
                          <section className="container">
                            <div>
                              <IconButton sx={{color: "#fff"}} onClick={handleClick}>
                                <ArrowBack />
                              </IconButton>
                            </div>
                            <div className="detail-container">
                              <div>
                                <article className="content">
                                  <Typography gutterBottom variant="h3" component="div" color="#f6c90e" >
                                    {hotel.name}
                                  </Typography>
                                  <Typography variant="body1" color="#eee">
                                    {hotel.desc}
                                  </Typography>
                                  <div className="like-container">
                                    <IconButton>
                                      <Favorite color="error" />
                                    </IconButton>
                                    <Chip sx={{color:"#eee"}} label="56" />
                                  </div>
                                </article>
                              </div>
                              <img
                                src={hotel.image}
                                alt={hotel.name}
                              />
                            </div>
                            <aside className="detail-form">
                                <BookingForm hotel={hotel} />
                            </aside>
                          </section>
                        )
      }
    </>
  )
}

export default HotelDetail