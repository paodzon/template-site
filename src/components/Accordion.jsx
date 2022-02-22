import React,{useState} from 'react';
import data from '../data.json';
import './Accordion.css';

const Accordion = () =>{
  
    const [activeNum, setActiveNum] = useState(null);


    const onClickAccordion = (i) =>{
      if(activeNum ===i){
        setActiveNum(null)
      }else{
        setActiveNum(i)
      }
    }

    

    const renderAccordion = data?.map((item,i) =>{

      const active =  (activeNum === i) ? 'active' : '';

      return(<div className="accordion">
      <div className="accordion__header" onClick={() => onClickAccordion(i)}>
        <div className="accordion__title">
          <h1>Accordion {i+1}</h1>
        </div>

        <div className={`accordion__icon ${active}`}>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className={`accordion__content ${active}`}>
        {item.title}
      </div>
    </div>)
    })

    return (
      <div className="accordion__container">
        {renderAccordion}
      </div>
    );
}

export default Accordion