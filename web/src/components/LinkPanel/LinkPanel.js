import styles from './styles.css'

const LinkPanel = () => {
  return (
    <div className={'panel'}>
      <div className={'growth-header'}>How would you like to grow relationally?</div>
      <div className={'button-list'}>
        <ButtonGroup title={'Build Christian Friendships'} linkText={'Join a Group'} />
        <ButtonGroup title={'Work Through some Hurts, Habits, or Hangups'} linkText={'Celebrate Recovery'} />
        <ButtonGroup title={'Serve Alongside Others'} linkText={'View Ministries'} />
        <ButtonGroup title={'Learn About Emotional Health'} linkText={'Learn More'} />
      </div>
    </div>
  )
}

const ButtonGroup = (props) => {

  return (
    <div className={'inner-item'}>
      <p>{props.title}</p>
      <button className={'btn-link'}>{props.linkText}</button>
    </div>
  )
}


export default LinkPanel
