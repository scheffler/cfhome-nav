import styles from './styles.css';
import LinkPanel from 'src/components/LinkPanel/LinkPanel';
import Persona from 'src/components/Persona/Persona';
import {Link} from "@redwoodjs/router";

/**
 * Intermediate selectable buttons as you walk down the choice path. Making a choice resolves to a LinkPanel
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ChoicePanel = ({title,choices,select, selected, persona, showLinkPanel}) => {
  choices = choices || [];
  const linkPanel = selected.linkPanel || {title: '', links:[]};

  return (
    <>
      <div className={'panel flex-panel choice-panel'}>
        <div className={'header-text'}>{title}</div>
        <div className={'button-list'}>
          <Persona {...persona} />
          {
            choices.map((ele, idx)=> {
              return <ChoiceButton key={idx} {...ele} select={select} selected={selected.buttonText} />
            })
          }
        </div>
      </div>
      <LinkPanel title={linkPanel.title} links={linkPanel.links} />
    </>
  )
};

const ChoiceButton = ({buttonText, select, selected}) => {
  const selClass = (selected === buttonText) ? 'btn-selected' : '';

  return (
    <div className={'inner-item'}>
      <button className={`btn ${selClass}`} onClick={()=> select(buttonText)}  >{buttonText}</button>
    </div>
  )
};


export default ChoicePanel
