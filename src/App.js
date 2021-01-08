import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import OfferCard from './components/OfferCard/OfferCard'
import Button from './components/Button/Button'
import Spinner from './components/Spinner/Spinner'

function App() {
  const API_URL = `${process.env.REACT_APP_CORS_ANYWHERE}/https://jobs.github.com/positions.json`

  const [jobs, setJobs] = useState([])
  const [page, setPage] = useState(1)
  const [params, setParams] = useState({})
  const [isData, setIsData] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const fetchJobs = async () => {
    setPage(1)
    try {
      const fetchedJobs = await axios.get(`${API_URL}`, {
        params: { page, ...params }
      })
      setIsLoading(false)
      if (fetchedJobs.data.length === 0) {
        setIsData(false)
      }
      setJobs(fetchedJobs.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [params, page])

  return (
    <>
      <Header />
      <Search searchJobs={params => setParams(params)} />
      {isLoading ? (
        <div className='spinner-container'>
          <Spinner />
        </div>
      ) : (
          <div className='offer-cards-container'>
            {jobs.map((job) => (
              <OfferCard job={job} key={job.id} />
            ))}
          </div>
        )}
      <div className='offer-button-container'>
        <Button btnText='Load More' changePage={() => setPage(page + 1)} />
      </div>
    </>
  )
}

export default App
