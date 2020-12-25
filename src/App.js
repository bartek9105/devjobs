import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import Header from './components/Header/Header'
import OfferCard from './components/OfferCard/OfferCard'
import Button from './components/Button/Button'
import Spinner from './components/Spinner/Spinner'

function App() {
  const API_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

  const [jobs, setJobs] = useState([])
  const [page, setPage] = useState(1)
  const [isData, setIsData] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const fetchJobs = async () => {
    try {
      const fetchedJobs = await axios.get(`${API_URL}?page=${page}`)
      setIsLoading(false)
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
      { isLoading ?
        <div className="spinner-container">
          <Spinner />
        </div>
        :
        <div className="offer-cards-container">
          {jobs.map(job => (
            <OfferCard job={job} key={job.id} />
          ))}
        </div>
      }
      {isData && !isLoading ?
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
