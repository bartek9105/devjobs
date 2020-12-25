import moment from 'moment'

const calcDateFromNow = date => {
  return moment(date).fromNow()
}

export default calcDateFromNow