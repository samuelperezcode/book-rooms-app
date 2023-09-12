import { useForm } from "react-hook-form"
import { Typography, Input, Button } from "@mui/material"
import { toast } from "react-hot-toast"
import useStore from '../store'

// eslint-disable-next-line react/prop-types
function BookingForm({hotel}) {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const addReservation = useStore( (state) => state.addReservation)

  const onSubmit = (dates) => {
    addReservation({hotel, dates})
    toast.success('Reservation Completed')
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="date" {...register("startDate", {required: true})}  />
      { errors.startDate && <Typography sx={{color:'red'}}>Start Date is Required</Typography>}
      <br />
      <Input type="date" {...register("endDate", {required: true})}  />
      { errors.endDate && <Typography sx={{color:'red'}}>End Date is Required</Typography>}
      <br />
      <br />
      <Button variant="contained" type="submit">
        MakeReservation
      </Button>
    </form>
  )
}

export default BookingForm