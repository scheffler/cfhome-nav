import CirclePic from 'src/components/CirclePic/CirclePic'
import LinkPanel from 'src/components/LinkPanel/LinkPanel'
import React, {useState} from 'react'
import {useTransition, animated, config} from 'react-spring'

// center the fixed width blocks horizontally on the page
// model the data as a single json config block, complete with links
// use styling from cfhome.org
// pull header from cfhome.org

const HomePage = () => {
  const [selected, setSelected] = useState('');
  const [show, set] = useState(false);

  const transitions = useTransition(show, {
    from: { opacity: 0, height: '0%' },
    enter: { opacity: 1, height: '100%'},
    leave: { opacity: 0, height: '0%' },
    reverse: show,
    delay: 100,
    config: config.slow
  })

  const optSelect = (val)=> {
    let expanded = !show || val !== selected;
    setSelected( (val === selected) ? '' : val);
    set(expanded);
  }

  return (
    <>
      <h1>Multi level selection navigation</h1>
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
                  <LinkPanel/>
              </animated.div>
            )
          }
        </section>
      </div>
    </>
  )
};

const navModel = {
  title: 'How would you like to grow?',
  subTitle: 'Select an area below you would like to grow in. We have plenty of resources that will help you become healthier, and assist you in your journey of growing more like Jesus.',
  imageLinks: [
    {
      text: 'Relational Health',
      image: '/images/pexels-matteo-badini-4064432.jpg',
      subPanel: {
        title: 'How would you like to grow relationally?',
        links: [
          {
            title: 'Build Christian Friendships',
            buttonText: 'Join a Group',
            buttonLink: ''
          },
          {
            title: 'Work Through some Hurts, Habits, or Hangups',
            buttonText: 'Celebrate Recovery',
            buttonLink: ''
          },
          {
            title: 'Server Alongside Others',
            buttonText: 'View Ministries',
            buttonLink: ''
          },
          {
            title: 'Learn About Emotional Health',
            buttonText: 'Learn More',
            buttonLink: ''
          }
        ]
      }
    },
    {
      text: 'Spiritual Health',
      image: '/images/pexels-aleksey-kuprikov-3493777.jpg'
    },
    {
      text: 'Physical Health',
      image: '/images/pexels-paul-ijsendoorn-33041.jpg'
    }
  ]
}

export default HomePage
