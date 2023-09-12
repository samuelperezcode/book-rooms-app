import { useQuery } from "@tanstack/react-query";
import getHotels from "../services/getHotels";
import Spiner from "./Spiner";
import HotelCard from "./HotelCard";

function ListOfHotels() {
  const {
    data: hotels,
    isLoading,
    error
  } = useQuery({
    queryKey:["hotels"],
    queryFn: getHotels
  })

  if(error) return <h3>Error fetching data, {error}</h3>

  return (
    <>
      {
        isLoading
          ? <Spiner />
          : hotels.map(hotel => {
            return <HotelCard key={hotel.id} />
          })
      }
    </>
  )
}

export default ListOfHotels

