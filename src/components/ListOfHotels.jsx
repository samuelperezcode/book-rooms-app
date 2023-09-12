import { useQuery } from "@tanstack/react-query";
import getHotels from "../services/getHotels";
import Spiner from "./Spiner";
import HotelCard from "./HotelCard";
import { Stack, Typography } from "@mui/material"

function ListOfHotels() {
  const {
    data: hotels,
    isLoading,
    error
  } = useQuery({ queryKey:["hotels"], queryFn: getHotels })


  return (
    <>
      <Typography variant="h4" component='h2' >
        Booking App
      </Typography>
      <Stack spacing={2}>
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
      </Stack>
    </>
  )
}

export default ListOfHotels

