import styles from './styles.css';

const CirclePic = ({image,text,selected,select}) => {

  const isSelected = selected === text
  const selclass = isSelected ? 'btn-selected' : '';
  const selImg = isSelected ? 'img-selected' : '';

  return (
    <div className={'picframe'}>
      <img className={`myimg ${selImg}`} src={image} alt={'photo'}/>
      <button className={`btn ${selclass}`} onClick={ () => select(text)} >{text}</button>
    </div>
  )
}

export default CirclePic
