import CirclePic from 'src/components/CirclePic/CirclePic'
import LinkPanel from 'src/components/LinkPanel/LinkPanel'
import React, {useState} from 'react'
import {useTransition, animated, config} from 'react-spring'
import navModel from 'src/navData';

// center the fixed width blocks horizontally on the page
// use styling from cfhome.org
// pull header from cfhome.org

const HomePage = () => {
  const [selected, setSelected] = useState({});
  const [show, set] = useState(false);

  const transitions = useTransition(show, {
    from: { opacity: 0, height: '0%' },
    enter: { opacity: 1, height: '100%'},
    leave: { opacity: 0, height: '0%' },
    reverse: show,
    delay: 200,
    config: config.slow
  })

  const optSelect = (val)=> {
    var match = navModel.imageLinks.find((ele)=> {
      return ele.text === val;
    });

    let expanded = !show || match.text !== selected.text;
    setSelected( (match.text === selected.text) ? {} : match);
    set(expanded);
  }

  return (
    <>
      <div className={'header-wrapper'}>
        <div className={'header'}>
          <div style={{width:296}}>
            <img className={'logo'} src={'/images/cf-logo.png'} alt={'logo'}/>
          </div>
          <div style={{width:700}}>
            &nbsp;
          </div>
        </div>
      </div>
      <div className={'carousel'}>
        <section className={'growth-section'}>
          <div className={'growth-header-container'}>
            <p className={'growth-header'}>
              {navModel.title}
            </p>
            <p className={'growth-info'}>{navModel.subTitle}</p>
          </div>
          <div className={'growth-choices-container'}>
            {
              navModel.imageLinks.map((link, idx)=> {
                return <CirclePic key={idx} {...link} selected={selected} select={optSelect} />
              })
            }
          </div>
          {
            transitions(
              (styles, item) =>
                item && <animated.div style={styles}>
                  <LinkPanel {...selected.subPanel}/>
              </animated.div>
            )
          }
        </section>
      </div>
    </>
  )
};

export default HomePage
