// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const changeEmojis = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="btn" onClick={changeEmojis}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
