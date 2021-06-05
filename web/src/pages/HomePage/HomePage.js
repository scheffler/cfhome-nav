import CirclePic from 'src/components/CirclePic/CirclePic'
import LinkPanel from 'src/components/LinkPanel/LinkPanel'
import React, {useState} from 'react'
import {useTransition, animated, config} from 'react-spring'

// selecting a 2nd time should clear selection
// center the fixed width blocks horizontally on the page
// overlay css image isn't working
// model the data as a single json config block, complete with links
// use styling from cfhome.org
// pull header from cfhome.org

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

  const optSelect = (val)=> {
    let expanded = !show || val !== selected;
    setSelected(val);
    set(expanded);
  }

  return (
    <>
      <h1>Multi level selection navigation</h1>
      <div className={'carousel'}>
        <section className={'growth-section'}>
          <div className={'growth-header-container'}>
            <p className={'growth-header'}>
              How would you like to grow?
            </p>
            <p className={'growth-info'}>
              Select an area below you would like to grow in. We have plenty of resources that will help you become
              healthier, and assist you in your journey of growing more like Jesus.
            </p>
          </div>
          <div className={'growth-choices-container'}>
            <CirclePic img={'/images/pexels-matteo-badini-4064432.jpg'} buttonText={'Option 1'} selected={selected} select={optSelect}/>
            <CirclePic img={'/images/pexels-aleksey-kuprikov-3493777.jpg'} buttonText={'Option 2'} selected={selected} select={optSelect}/>
            <CirclePic img={'/images/pexels-paul-ijsendoorn-33041.jpg'} buttonText={'Option 3'} selected={selected} select={optSelect}/>
          </div>
          {
            transitions(
              (styles, item) =>
                item && <animated.div style={styles}><LinkPanel/></animated.div>
            )
          }
        </section>
      </div>
    </>
  )
};

export default HomePage
