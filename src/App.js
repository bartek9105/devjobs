import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import Header from './components/Header/Header'
import OfferCard from './components/OfferCard/OfferCard'
import Button from './components/Button/Button'

function App() {
  const API_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

  const [jobs, setJobs] = useState([])
  const [page, setPage] = useState(1)
  const [isData, setIsData] = useState(true)

  const fetchJobs = async () => {
    try {
      const fetchedJobs = await axios.get(`${API_URL}?page=${page}`)
      if (fetchedJobs.data.length === 0) {
        setIsData(false)
      }
      setJobs([...jobs, ...fetchedJobs.data])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [page])

  return (
    <>
      <Header />
      <div className="offer-cards-container">
        {jobs.map(job => (
          <OfferCard job={job} key={job.id} />
        ))}
      </div>
      { isData ?
        <div className="offer-button-container">
          <Button btnText="Load More" changePage={() => setPage(page + 1)} />
        </div>
        :
        null
      }
    </>
  )
}

export default App;
