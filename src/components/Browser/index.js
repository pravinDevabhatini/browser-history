import {Component} from 'react'
import './index.css'

class Browser extends Component {
  render() {
    const {details, onDeleteHistory} = this.props
    const {id, title, timeAccessed, logoUrl, domainUrl} = details
    const onDeleteItem = () => {
      onDeleteHistory(id)
    }

    return (
      <li className="list-item">
        <div className="domain-details">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="label-title">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="custom-button"
          onClick={() => onDeleteItem(id)}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </li>
    )
  }
}
export default Browser
