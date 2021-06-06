import styles from './styles.css'

const LinkPanel = ({title,links}) => {
  links = links || [];

  return (
    <div className={'panel'}>
      <img src={'/images/divider.svg'} />
      <div className={'growth-header'}>{title}</div>
      <div className={'button-list'}>
        {
          links.map((ele, idx)=> {
            return <ButtonGroup key={idx} {...ele} />
          })
        }
      </div>
    </div>
  )
}

const ButtonGroup = ({buttonText, title, buttonLink}) => {

  return (
    <div className={'inner-item'}>
      <p>{title}</p>
      <a className={'btn-link'} href={buttonLink} >{buttonText}</a>
    </div>
  )
}

export default LinkPanel
