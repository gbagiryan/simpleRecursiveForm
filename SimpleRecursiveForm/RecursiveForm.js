import React, { useState } from 'react'

const RecursiveForm = (props) => {

  const [SubObjects, SetSubObjects] = useState({})
  const [Checkbox, SetCheckbox] = useState(false)

  const handleChangeInput = (e) => {
    SetSubObjects({...SubObjects, [e.target.name]: e.target.value })
  }

  const handleChangeSubObjects = (SubSubObjects)=>{
    SetSubObjects({ ...SubObjects, ...{Key:SubObjects.Key, Value: SubSubObjects} })
    props.handleChangeObjects(SubObjects)
  }

  const handleCheckbox = () => {
    SetCheckbox(!Checkbox)
  }

  return (
    <div>
      <input key={'Key'} placeholder={'Key'} name={'Key'} type="text" value={SubObjects.Key} onChange={handleChangeInput}/>
      <input key={'Value'} placeholder={'Value'} name={'Value'} type="text" value={SubObjects.Value}
             onChange={handleChangeInput}/>
      <input type={'checkbox'} name={'Checkbox'} key={'Checkbox'} value={Checkbox} onChange={handleCheckbox}/>
      <button onClick={handleChangeSubObjects}>ADD</button>
      {Checkbox && <RecursiveForm SubObjects={SubObjects} handleChangeObjects={handleChangeSubObjects}/>}
    </div>
  )
}

export default RecursiveForm
