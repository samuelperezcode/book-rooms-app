import { API } from "../constants/const"

const getHotels = async () => {
  const res =  await fetch(API)
  if (!res.ok) throw new Error("Network Response was not Ok")
  return (await res).json()
}

export default getHotels