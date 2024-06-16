import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDetails.css';

function KoreanLanguage() {
  return (
    <div className='course-details-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Korean Language</h1>
        </div>
      </header>

      <div className='container py-5'>
        <h2>About the Korean Language Course</h2>
        <p>Learn the Korean language from the best and immerse yourself in the glorious culture and traditions of South Korea.</p>
        <Link to='/contact'>
          <button className='btn btn-danger mt-3'>Join Course</button>
        </Link>
      </div>
    </div>
  );
}

export default KoreanLanguage;
