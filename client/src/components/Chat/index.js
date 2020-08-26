import React, {useEffect, useState} from 'react'
import querySring from 'query-string'
import io from 'socket.io-client'

let socket = null;
const ENDPOINT = 'localhost:5000'

function Chat(props) {

  const {location} = props;

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  useEffect(() => {
    const data = querySring.parse(location.search)
    
    socket = io(ENDPOINT)

    console.log(socket);
    

    setName(data.name)
    setRoom(data.room)

    socket.emit('join', {name, room}, () => {

    })
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])
  return (
    <div>
      Chat
    </div>
  )
}

export default Chat

