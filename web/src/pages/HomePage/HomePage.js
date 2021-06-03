import CirclePic from 'src/components/CirclePic/CirclePic'
import LinkPanel from 'src/components/LinkPanel/LinkPanel'
import React, {useState} from 'react'
import {useTransition, animated, config} from 'react-spring'

// selecting a 2nd time should clear selection
// center the fixed width blocks horizontally on the page
// overlay css image isn't working
// model the data as a single json config block, complete with links

const HomePage = () => {
  const [selected, setSelected] = useState('');
  const [show, set] = useState(false);

  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 100,
    config: config.slow
  })

  return (
    <>
      <h1>Multi level selection navigation</h1>
      <div style={{marginTop: 100}}/>
      <div className={'carousel'}>
        <div className={'pics'}>
          <CirclePic img={'/images/pexels-matteo-badini-4064432.jpg'} buttonText={'Option 1'} selected={selected} select={setSelected}/>
          <CirclePic img={'/images/pexels-aleksey-kuprikov-3493777.jpg'} buttonText={'Option 2'} selected={selected} select={setSelected}/>
          <CirclePic img={'/images/pexels-paul-ijsendoorn-33041.jpg'} buttonText={'Option 3'} selected={selected} select={setSelected}/>
        </div>
        <div >
          <button onClick={()=> set(true)} >Expand Section</button>
          <button onClick={()=> set(false)}>Collapse Section</button>
        </div>

        {
          transitions(
            (styles, item) =>
              item && <animated.div style={styles}><LinkPanel/></animated.div>
          )
        }

      </div>
    </>
  )
};

export default HomePage
