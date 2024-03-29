import LinkPanel from 'src/components/LinkPanel/LinkPanel';
import Persona from 'src/components/Persona/Persona';
import {Link} from "@redwoodjs/router";

const ChoicePanel = ({title,choices,select, selected, persona, showLinkPanel}) => {
  choices = choices || [];
  const linkPanel = selected.linkPanel || {title: '', links:[]};

  return (
    <>
      <div className={'panel flex-panel choice-panel'}>
        <div className={'choice-body'}>
          <Persona {...persona} />
          <div className={'choice-detail'}>
            <div>
              <div className={'header-text choice-header'}>{title}</div>
              <div className={'choice-subtitle'}>Select one of the Four Practices to find resources</div>
              <div className={'choice-button-list'}>
                {
                  choices.map((ele, idx)=> {
                    return <ChoiceButton key={idx} {...ele} select={select} selected={selected.buttonText} />
                  })
                }
              </div>
            </div>
            <LinkPanel title={linkPanel.title} links={linkPanel.links} />
          </div>
        </div>
      </div>
    </>
  )
};

const ChoiceButton = ({buttonText, select, selected}) => {
  const selClass = (selected === buttonText) ? 'btn-selected' : '';

  return (
    <div className={'inner-item'}>
      <button className={`btn btn-choice ${selClass}`} onClick={()=> select(buttonText)}  >{buttonText}</button>
    </div>
  )
};


export default ChoicePanel
