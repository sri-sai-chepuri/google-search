// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, changeInput} = props
  const {suggestion} = suggestionsList
  const change = () => {
    changeInput(suggestion)
  }

  return (
    <li className="list">
      <p>{suggestion}</p>
      <a href={change}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={change}
        />
      </a>
    </li>
  )
}

export default SuggestionItem
