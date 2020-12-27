import Button from '../Button/Button'
import '../Search/Search.scss'
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'

const Search = () => {
  return (
    <form className="search-form">
      <div className="search-form__input-container search-form__main-filter">
        <img src={searchIcon} alt="search" className="search-form__input__icon" />
        <input type="text" placeholder="Filter by title, companies, expertise..." className="search-form__input" />
      </div>
      <div className="search-form__input-container search-form__location-filter">
        <img src={locationIcon} alt="location" className="search-form__input__icon" />
        <input type="text" placeholder="Filter by location" className="search-form__input search-form__location-filter" />
      </div>
      <div className="search-form__input-container search-form__checkbox-container">
        <input type="checkbox" name="full-time" className="search-form__input search-form__checkbox" />
        <label htmlFor="full-time" className="search-form__checkbox__label">Full Time Only</label>
        <Button btnText="Search" />
      </div>
    </form>
  )
}

export default Search