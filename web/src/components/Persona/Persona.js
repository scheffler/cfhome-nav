

const Persona = ({name,picture,title,description}) => {

  return (
    <div className={'persona-panel'}  >
      <div className={'persona-img'}>
        <img className={`circle-img circle-small`} src={picture} alt={'photo'} />
      </div>
      <div className={'persona-name'}>
        {name}
      </div>
      <div className={'persona-title'}>
        {title}
      </div>
      <div className={'persona-description'}>
        {description}
      </div>

    </div>
  )
}

export default Persona
