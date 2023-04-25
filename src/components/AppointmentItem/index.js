// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appList, favouriteicon, uniquekey} = props
  const {name, id, dateOf, idfavoutire} = appList
  console.log(dateOf)
  console.log(uniquekey)
  const initialdate = dateOf.split('-')
  console.log(initialdate)
  const newDate = format(
    new Date(initialdate[0], initialdate[2], initialdate[1]),
    'dd MMMM yyyy, EEEE',
  )
  const myicon = () => {
    favouriteicon(uniquekey)
  }
  const imageUrl = idfavoutire
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list_card_container">
      <div>
        <p className="app_heading">{name}</p>
        <p className="app_date">{newDate}</p>
      </div>
      <button
        onClick={myicon}
        data-testid="star"
        className="button_fav"
        type="button"
      >
        <img className="fav_icon" src={imageUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
