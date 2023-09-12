const getHotels = async () => {
  const res = fetch('https:localhost:3001/hotels')
  if (!res.ok) throw new Error("Network Response was not Ok")
  return (await res).json()
}

export default getHotels