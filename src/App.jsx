import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import './global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.taskarea}>
        {/* <NewTask /> */}
        <Tasks />
      </div>
    </>
  )
}
