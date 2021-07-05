

const CirclePic = ({image,text,selected,select}) => {

  const isSelected = selected.text === text
  const selclass = isSelected ? 'btn-selected' : '';
  const selImg = isSelected ? 'img-selected' : '';

  return (
    <div className={'picframe'} onClick={ () => select(text)} >
      <img className={`circle-img circle-large ${selImg}`} src={image} alt={'photo'} />
      <button className={`btn btn-circle ${selclass}`}  >{text}</button>
    </div>
  )
}

export default CirclePic
