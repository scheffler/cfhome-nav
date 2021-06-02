import CirclePic from 'src/components/CirclePic/CirclePic'
import LinkPanel from 'src/components/LinkPanel/LinkPanel'
import React, {useState} from 'react'

// selecting a 2nd time should clear selection
// overlay css image isn't working
// show selection panel

const HomePage = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <h1>Multi level selection navigation</h1>
      <div style={{marginTop:100}}>

      </div>
      <div className={'carousel'}>
        <div className={'pics'}>
          <CirclePic img={'/images/pexels-matteo-badini-4064432.jpg'} buttonText={'Option 1'} selected={selected} select={setSelected}/>
          <CirclePic img={'/images/pexels-aleksey-kuprikov-3493777.jpg'} buttonText={'Option 2'} selected={selected} select={setSelected}/>
          <CirclePic img={'/images/pexels-paul-ijsendoorn-33041.jpg'} buttonText={'Option 3'} selected={selected} select={setSelected}/>
        </div>

        <LinkPanel/>
        <div>
          <button>Expand Section</button>
          <button>Collapse Section</button>
        </div>
      </div>
    </>
  )
}

export default HomePage
