import ListOfHotels from "./components/ListOfHotels"
import HotelDetail from "./components/HotelDetail"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import {Route, Switch, } from 'wouter'
import { Toaster } from "react-hot-toast"

const client = new QueryClient()

function App() {

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <QueryClientProvider client={client}>
        <Switch >
          <Route path="/" component={ListOfHotels} />
          <Route path="/hotels/:id" component={HotelDetail} />
        </Switch>
      </QueryClientProvider>
    </>
  )
}

export default App
