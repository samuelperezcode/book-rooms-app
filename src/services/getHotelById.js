import { API } from "../constants/const"

const getHotelById = async (id) => {
  const res = await fetch(`${API}/${id}`)
  if(!res.ok) throw new Error('Invalid Request')
  return res.json()

}

export default getHotelById