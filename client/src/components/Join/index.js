import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import './join.css'


function Join() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeRoom = (e) => {
    setRoom(e.target.value)
  }
  const hadleSubmit = (e) => {
    e.preventDefault()
  }
  const handleClickLink = (e) => {
    if (name === '' || room === '') {
      e.preventDefault()
    }
  }
  return (
    <div className="join__outerContainer">
      <div className="join__innerContainer">
        <h1 className="join__header">Join</h1>
        <FormControl>
          <InputLabel htmlFor="input-name"></InputLabel>
          <Input className="join__input" onChange={handleChangeName} />
          <InputLabel htmlFor="input-room"></InputLabel>
          <Input className="join__input" onChange={handleChangeRoom} />
          <Link onClick={handleClickLink} to={`/chat?name=${name}&room=${room}`}>
            <Button className="join__button" variant="contained" color="primary">Submit</Button>
          </Link>
        </FormControl>
      </div>
    </div>
  )
}

export default Join
