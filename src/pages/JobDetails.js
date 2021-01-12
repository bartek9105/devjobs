import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import './JobDetails.scss'
import calcDateFromNow from '../helpers/calcDateFromNow'

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
    <section>
      <Header />
      <header className='job-details-header'>
        <div className='job-details-header__logo'>
          <img src={job.company_logo} alt={job.company} />
        </div>
        <div className='job-details-header__company'>
          <div>
            <h1 className='job-details-header__company__name'>{job.company}</h1>
            <span className="job-details-header__company__url">{job.company_url}</span>
          </div>
          <Button btnText="Company Site" />
        </div>
      </header>
      <section className='job-details-container'>
        <article>
          <header className="job-details-container__header">
            <div className="job-details-container__header__info">
              <span>{calcDateFromNow(job.created_at)}</span>
              <span className="job-details-container__header__info__bullet">&bull;</span>
              <span>{job.type}</span>
              <div>
                <h1 className="job-details-container__header__title">{job.title}</h1>
                <span className="job-details-container__header__location">{job.location}</span>
              </div>
            </div>
            <Button btnText="Apply Now" />
          </header>
          <div className="job-details-container__description" dangerouslySetInnerHTML={{ __html: job.description }}>
          </div>
        </article>
      </section>
      <section className="job-details-apply">
        <h2 className="job-details-apply__title">How to apply</h2>
        <article dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></article>
      </section>
      <footer className="job-details-footer">
        <div className="job-details-footer-container">
          <div className="job-details-footer__info">
            <span className="job-details-footer__info__title">{job.title}</span>
            <span className="job-details-footer__info__company">{job.company}</span>
          </div>
          <div>
            <Button btnText="Apply Now" />
          </div>
        </div>
      </footer>
    </section>
  )
}

export default JobDetails
