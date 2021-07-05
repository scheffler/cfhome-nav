
const LinkPanel = ({title,links}) => {
  links = links || [];

  return (
    <div className={'flex-panel'}>
      <div className={'links-header'}>{title}</div>
      <div className={'link-button-list'}>
        {
          links.map((ele, idx)=> {
            return <ButtonGroup key={idx} {...ele} />
          })
        }
      </div>
    </div>
  )
}

const ButtonGroup = ({buttonText, buttonLink}) => {

  return (
    <div className={'inner-item'}>
      <button className={'btn btn-choice'}  >{buttonText}</button>
    </div>
  )
}

export default LinkPanel
