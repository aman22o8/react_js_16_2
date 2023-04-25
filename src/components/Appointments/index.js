// Write your code here
import {Component} from 'react'
import {v4 as myids} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {listAppointment: [], name: '', dateOf: []}

  myfavourite = uniquekey => {
    this.setState(prevState => ({
      listAppointment: prevState.listAppointment.map(each => {
        if (uniquekey === each.id) {
          return {...each, idfavoutire: !each.idfavoutire}
        }
        return each
      }),
    }))
  }

  // listAppointment.filter(each => each.idfavoutire === true)
  filteredliked = () => {
    const {listAppointment} = this.state
    this.setState({
      listAppointment: listAppointment.filter(
        each => each.idfavoutire === true,
      ),
    })
  }

  onSubmitting = event => {
    event.preventDefault()
    const {name, dateOf} = this.state
    const newAppointment = {
      id: myids(),
      name,
      dateOf,
      idfavoutire: false,
    }
    this.setState(prevState => ({
      listAppointment: [...prevState.listAppointment, newAppointment],
      name: '',
      dateOf: '',
    }))
  }

  myname = event => {
    this.setState({name: event.target.value})
  }

  mydate = event => {
    this.setState({dateOf: event.target.value})
  }

  render() {
    const {listAppointment, name, dateOf} = this.state
    // console.log(name)
    // console.log(typeof dateOf)
    // console.log(typeof dateOf)
    console.log(listAppointment)
    // console.log(dateOf)
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="main_heading">Add Appointment</h1>
          <div className="header">
            <form className="form_container" onSubmit={this.onSubmitting}>
              <label htmlFor="Title" className="title">
                TITLE
              </label>
              <input
                id="Title"
                className="title_input"
                onChange={this.myname}
                type="text"
                value={name}
                placeholder="Title"
              />
              <label htmlFor="Date" type="date" className="title">
                DATE
              </label>
              <input
                id="Date"
                className="title_input"
                onChange={this.mydate}
                type="date"
                value={dateOf}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>

            <img
              className="image_1"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
            />
          </div>
          <hr className="separator" />
          <div className="footers">
            <div className="footer_first_container">
              <h1 className="footer_heading">Appointments</h1>
              <button
                onClick={this.filteredliked}
                type="button"
                className="stared "
              >
                Starred
              </button>
            </div>

            {listAppointment.map(each => (
              <ul className="list_container">
                <AppointmentItem
                  favouriteicon={this.myfavourite}
                  key={each.id}
                  uniquekey={each.id}
                  appList={each}
                />
              </ul>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
