import styles from './styles.css';

const CirclePic = (props) => {

  const selclass = (props.selected === props.buttonText) ? 'btn-selected' : '';

  return (
    <div className={'picframe'}>
      <img className={'myimg'} src={props.img} alt={'photo'}/>
      <button className={`btn ${selclass}`} onClick={ () => props.select(props.buttonText)} >{props.buttonText}</button>
    </div>
  )
}

export default CirclePic
