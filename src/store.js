import { createStore } from "zustand";

const useStore = createStore( (set) => ({
  reservation: [],
  addReservation : (hotel, dates) => set( state => {
    [...state.reservation, {hotel, dates} ]
  })
}))

export default useStore