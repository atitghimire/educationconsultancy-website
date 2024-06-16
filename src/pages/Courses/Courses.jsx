import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import SouthKoreaImg from '../../utils/images/southkorea1.jpg';
import JapanImg from '../../utils/images/japan-img.jpg';
import IELTSImg from '../../utils/images/ielts.jpg';
import PTEImg from '../../utils/images/PTE-IMG.jpg';
import BridgeCourse from '../../utils/images/StXaviers-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';


const courses = [
    {
        id: 1,
        img: [SouthKoreaImg],
        title: 'Korean Language',
        description: 'Learn the Korean language from the best and immerse yourself in the glorious culture and traditions of South Korea.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'GMAT',
        description: 'Prepare for the GMAT (Graduate Management Admission Test) and enhance your skills for admission to business schools.'
    },
    {
        id: 3,
        img: [EducationCourseImg],
        title: 'GRE',
        description: 'Get ready for the GRE (Graduate Record Examination) and qualify for graduate programs in various fields.'
    },
    {
        id: 4,
        img: [IELTSImg],
        title: 'IELTS',
        description: 'Prepare for the IELTS (International English Language Testing System) exam to demonstrate proficiency in English for study or work abroad.'
    },
    {
        id: 5,
        img: [PTEImg],
        title: 'PTE',
        description: 'Prepare for the PTE (Pearson Test of English) Academic exam and prove your English language skills for immigration or academic purposes.'
    },
    {
        id: 6,
        img: [JapanImg],
        title: 'Japanese Language',
        description: 'Learn Japanese and explore the rich culture and heritage of Japan while gaining proficiency in the language.'
    },
    {
        id: 7,
        img: [ComputerScienceCourseImg],
        title: 'Basic Computer Training',
        description: 'Acquire essential computer skills from and Office Package knowledge for everyday use and office tasks.'
    },
    {
        id: 8,
        img: [BridgeCourse],
        title: 'Bridge Course',
        description:'Prepare for the transition from high school to top colleges of Nepal like St. Xaviers, Budhanilkantha, Prasadi etc by enhancing your academic skills and knowledge.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Get To Know about the courses provided by this insitution which are of your interest</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                                <Link to={`/contact`}>
                       <Button variant="danger" className="mt-3">Join Course</Button>
                          </Link>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;