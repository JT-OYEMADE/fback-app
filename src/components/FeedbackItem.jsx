import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from './context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple'/>
      </button>
      <div className="text-deisplay">
        {item.text}
      </div>
    </Card>
  )
}

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem 