import React from 'react'
import styles from './Chat.module.css'
import InputForm from '@/UI/InputForm/InputForm'
import ChatHeader from '@/UI/ChatHeader/ChatHeader'
import ChatFlow from '../ChatFlow/ChatFlow'

const Chat = () => {
  return (
    <main className={styles.chatFlow}>
      <div className={styles.chatHeader}>
        <ChatHeader />
      </div>
      {/* Chat Flow */}
      <div className={styles.chatFlow}>
        <ChatFlow />
      </div>
      <InputForm />
    </main>
  )
}

export default Chat