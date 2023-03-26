import React from 'react'
import User from './User'
import {Route, Routes} from 'react-router-dom'
import {useQuery, QueryClient, QueryClientProvider} from 'react-query'
//Crear cliente
const queryClient= new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <User/>
    </QueryClientProvider>
    /* <Routes>
      <Route path='/' element={<User/>}/>
    </Routes> */
  )
}
