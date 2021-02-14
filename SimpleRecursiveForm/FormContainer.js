import React, { useState } from 'react'
import RecursiveForm from '../ObjectForm/RecursiveForm'

const FormContainer = (props) => {

  const [objects, setObject] = useState({})

  const handleChangeObjects = (SubObjects) => {
    setObject({SubObjects})
  }
  console.log(objects)

  return (
    <RecursiveForm handleChangeObjects={handleChangeObjects} objects={objects}/>
  )
}
