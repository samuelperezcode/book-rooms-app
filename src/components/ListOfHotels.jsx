import { useQuery } from "@tanstack/react-query";
import getHotels from "../services/getHotels";
import Spiner from "./Spiner";
import HotelCard from "./HotelCard";
import { Typography } from "@mui/material"
import figure from '../assets/figure.svg'

function ListOfHotels() {
  const {
    data: hotels,
    isLoading,
    error
  } = useQuery({ queryKey:["hotels"], queryFn: getHotels })


  return (
    <section className="container">
      <img className="figure-yellow" src={figure} alt="yollow figure" />
      <Typography sx={{marginBlock:8}} variant="h2" component='h1' >
        Booking Room
      </Typography>
      <div className="hotels">
        {
          isLoading
            ? <Spiner />
            : error ? <h3>Error fetching data, {error.message}</h3>
                    :  hotels.map(hotel => {
                        return (
                                  <HotelCard key={hotel.id} id={hotel.id} name={hotel.name} desc={hotel.desc} image={hotel.image} />
                              )
                      })
        }
      </div>
    </section>
  )
}

export default ListOfHotels

