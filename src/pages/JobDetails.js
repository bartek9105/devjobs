import { useState, useEffect } from 'react'
import axios from 'axios'

const JobDetails = ({ match }) => {
  const API_URL = `${process.env.REACT_APP_CORS_ANYWHERE}/https://jobs.github.com/positions/${match.params.id}.json`

  const [job, setJob] = useState({})

  const fetchJob = async () => {
    try {
      const job = await axios.get(API_URL)
      setJob(job.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJob()
  }, [])

  return (
    <h1>{job.title}</h1>
  )
}

export default JobDetails