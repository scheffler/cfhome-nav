import styles from './styles.css';
import LinkPanel from 'src/components/LinkPanel/LinkPanel';

/**
 * Intermediate selectable buttons as you walk down the choice path. Making a choice resolves to a LinkPanel
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ChoicePanel = ({title,choices,select, selected, showLinkPanel}) => {
  choices = choices || [];

  return (
    <>
      <div className={'panel'}>
        <img alt={'divider line'} src={'/images/divider.svg'} />
        <div className={'growth-header'}>{title}</div>
        <div className={'button-list'}>
          {
            choices.map((ele, idx)=> {
              return <ChoiceButton key={idx} {...ele} select={select} selected={selected} />
            })
          }
        </div>
      </div>
      <div className={'panel'}>
        <img alt={'divider line'} src={'/images/divider.svg'} />
        <div className={'growth-header'}>{title}</div>
        <div className={'button-list'}>
          {
            choices.map((ele, idx)=> {
              return <ChoiceButton key={idx} {...ele} select={select} selected={selected} />
            })
          }
        </div>
      </div>
    </>
  )
};

const ChoiceButton = ({buttonText, select, selected, children}) => {

  const selClass = (selected === buttonText) ? 'btn-selected' : '';

  return (
    <div className={'inner-item'}>
      <button className={`btn ${selClass}`} onClick={()=> select(buttonText)}  >{buttonText}</button>
    </div>
  )
};

export default ChoicePanel
