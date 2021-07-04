import CirclePic from 'src/components/CirclePic/CirclePic';
import ChoicePanel from 'src/components/ChoicePanel/ChoicePanel';
import React, {useState} from 'react';
import {useTransition, animated, config} from 'react-spring';
import navModel from 'src/navData';

// center the fixed width blocks horizontally on the page
// use styling from cfhome.org
// pull header from cfhome.org

const HomePage = () => {
  const [selectedCircle, setSelectedCircle] = useState({});
  const [selectedChoice, setSelectedChoice] = useState({});
  const [showChoices, setShowChoicePanel] = useState(false);

  // shouldn't need this if selectedChoice state is used properly
  const [showLinkPanel, setShowLinkPanel] = useState(false);

  const choiceTransitions = useTransition(showChoices, {
    from: { opacity: 0, height: '0%' },
    enter: { opacity: 1, height: '100%'},
    leave: { opacity: 0, height: '0%' },
    reverse: showChoices,
    delay: 200,
    config: config.slow
  })

  const circleSelect = (val)=> {
    var match = navModel.imageLinks.find((ele)=> {
      return ele.text === val;
    });

    let expanded = !showChoices || match.text !== selectedCircle.text;
    setSelectedCircle( (match.text === selectedCircle.text) ? {} : match);
    setShowChoicePanel(expanded);
    setSelectedChoice({});
    setShowLinkPanel(false);
  }

  const choiceSelect = (val)=> {
    var match = selectedCircle.choicePanel.choices.find((ele)=> {
      return ele.buttonText === val;
    })

    setSelectedChoice(match);
    setShowLinkPanel(true);
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
                return <CirclePic key={idx} {...link} selected={selectedCircle} select={circleSelect} />
              })
            }
          </div>
          {
            choiceTransitions(
              (styles, item) =>
                item && <animated.div style={styles}>
                  <ChoicePanel {...selectedCircle.choicePanel}
                               select={choiceSelect}
                               selected={selectedChoice}
                               showLinkPanel={showLinkPanel}

                  />
              </animated.div>
            )
          }
        </section>
      </div>
    </>
  )
};

export default HomePage
