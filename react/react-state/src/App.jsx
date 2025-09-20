import { useState } from 'react'

import './App.css'
import LudoBoard from './LudoBoard'
import Todolist from './TodoList'
// import Counter from './counter'
// import LikeButtton from './LikeButton'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {
  return(
  <>
  <Ticket ticket={[0,5,4]}/>
  <Ticket ticket={[4,5,2,3,1]}/>
  </>
  )
}

export default App
