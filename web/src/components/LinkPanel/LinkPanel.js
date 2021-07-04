
/**
 * Bottom-most panel of selectable buttons which navigate you to another page/resource
 *
 * @param title
 * @param choices
 * @returns {JSX.Element}
 * @constructor
 */


const LinkPanel = ({title,links}) => {
  links = links || [];

  return (
    <div className={'panel'}>
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
