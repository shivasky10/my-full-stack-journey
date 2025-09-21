import { useState } from 'react'

import './App.css'
import LudoBoard from './LudoBoard'
import Todolist from './TodoList'
// import Counter from './counter'
// import LikeButtton from './LikeButton'
import Lottery from './Lottery'
import Form from './Form'
import CommentForm from './CommentForm'
import Comment from './Comment'
import Joker from './Joker'

function App() {
  return(
  <>
    {/* <Lottery n={3} winningSum={15}/> */}
    {/* <Form/> */}
    {/* <CommentForm/> */}
    {/* <Comment/> */}
    <Joker/>
  </>
  )
}

export default App
