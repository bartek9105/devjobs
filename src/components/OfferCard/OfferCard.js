import calcDateFromNow from '../../helpers/calcDateFromNow'
import './OfferCard.scss'

const OfferCard = ({ job }) => {
  const { title, type, created_at, location, company_logo, company } = job
  return (
    <section className="offer">
      <div className="offer__logo-container">
      {company_logo ? 
        <img src={company_logo} alt={title} className="offer__logo" />      
      : null}
      </div>
      <div>
        <span className="offer__info">{calcDateFromNow(created_at)}</span>
        <span className="offer__dot">&middot;</span>
        <span className="offer__info">{type}</span>
      </div>
      <h3 className="offer__title">{title}</h3>
      <div>
        <span className="offer__info">{company}</span>      
      </div>
      <span className="offer__location">{location}</span>
    </section>
  )
}

export default OfferCard