import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Here we look at the some of most frequently asked question by you regarding our organization and courses</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Where is it situated?</Accordion.Header>
                    <Accordion.Body>
                        Ans: It is situated in Koteshwor, Kathmandu, Nepal. Exactly it lies on way to Balkumari.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What courses are offered?</Accordion.Header>
                    <Accordion.Body>
                       We offer wide range of courses like language classes of languages like Korean, Japanese, English, Examination courses like IELTS, PTE and Many More.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Third question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Fourth question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;