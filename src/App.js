import './App.scss'
import Header from './components/Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import OfferCard from './components/OfferCard/OfferCard'

function App() {
  const API_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
      const fetchedJobs = await axios.get(API_URL)
      setJobs(fetchedJobs.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <>
      <Header />
      <div className="offers-container">
        {jobs.map(job => (
          <OfferCard job={job} key={job.id} />
        ))}
      </div>
    </>
  )
}

export default App;
