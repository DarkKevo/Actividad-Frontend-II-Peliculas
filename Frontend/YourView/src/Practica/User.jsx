import axios from 'axios'
import {useQuery} from 'react-query'

function User() {
  const query = useQuery('user', async()=>{
    const {data}= await axios.get('https://rickandmortyapi.com/api/character')
    return data.results
})
if(query.isLoading)return '...'
  return (
    <div>
      {query.data.map((s)=>(
        <div>
          <h1>{s.name}</h1>
          <img src={s.image} alt=''/>
        </div>
      ))}
    </div>
  )
}
export default User