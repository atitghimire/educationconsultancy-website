import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";
import Blog4Img from "../../utils/images/blog4-img.jpg";
import Blog5Img from "../../utils/images/blog5-img.jpg";
import Blog6Img from "../../utils/images/blog6-img.jpg";
import Blog7Img from "../../utils/images/blog7-img.jpg";
import Blog8Img from "../../utils/images/blog8-img.jpg";
import Blog9Img from "../../utils/images/blog9-img.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "STUDY IN USA",
    description: `
            United States
            The United States of America (USA) hosts the most number of international students in the world. Quality education, unique curriculum, multicultural environment, and abundant opportunities are just some of the reasons why many International students want to study in the US.
            \n
            <strong>Why study in USA?</strong>
            Academic Excellence
            Variety of Educational Opportunities
            Cutting-Edge Technology
            Opportunity for Research
            Flexibility
            Support Services for International Students
            Global Education and Long-Term Career Prospects
            Campus Life Experience
        `,
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "Need for Languages Skills",
    description:
      "In today's interconnected world, proficiency in multiple languages is increasingly important. Language skills not only enhance communication but also open doors to diverse cultures and international career opportunities. Whether for academic pursuits, travel, or business, mastering new languages can significantly broaden one's horizons and increase adaptability in various global contexts.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Student View",
    description:
      "East Rising Sun academy has sent many student to their dream detinations. Here are some views of the students",
  },
  {
    id: 4,
    img: [Blog4Img],
    title: "Study in Korea",
    description:
      "South Korea is gaining popularity as a study destination due to its strong emphasis on education and technological advancements. Students can experience a unique blend of traditional culture and modern innovation. Korean universities offer competitive programs, particularly in fields such as science, engineering, and business, supported by state-of-the-art facilities and research opportunities.",
  },
  {
    id: 5,
    img: [Blog5Img],
    title: "Study in Japan",
    description:
      "Japan offers a unique educational experience characterized by a blend of rich cultural heritage and cutting-edge technology. The country is home to many prestigious universities known for their research and innovation. International students can enjoy a high standard of living, a disciplined learning environment, and opportunities to explore various fields of study in a global context.",
  },
  {
    id: 6,
    img: [Blog6Img],
    title: "About East Rising Sun",
    description: `The term "East Rising Sun" often refers to Japan, known for its rich culture, technological innovation, and stunning natural landscapes. Japan's education system is highly regarded worldwide, offering quality education, extensive research opportunities, and a unique blend of traditional and modern lifestyles. It is a country where ancient traditions harmoniously coexist with cutting-edge advancements.`,
  },
  {
    id: 7,
    img: [Blog7Img],
    title: "Life in US",
    description:
      "Life in the United States is diverse and dynamic, characterized by a rich cultural mix and varied lifestyles. From bustling urban centers to serene countryside, the US offers something for everyone. The country is known for its high standard of living, technological innovation, and numerous opportunities for personal and professional growth. The multicultural environment fosters a sense of community and inclusion.",
  },
  {
    id: 8,
    img: [Blog8Img],
    title: "Life in Canada",
    description:
      "Life in Canada is known for its high quality, safety, and inclusiveness. The country boasts beautiful landscapes, vibrant cities, and a strong sense of community. Canadians enjoy a balanced lifestyle with access to excellent healthcare, education, and social services. The multicultural society and friendly environment make it a welcoming place for newcomers and a great place to live and work.",
  },
  {
    id: 9,
    img: [Blog9Img],
    title: "Global Universities",
    description:
      "Universities around the world offer diverse programs, research opportunities, and unique cultural experiences. From the Ivy League schools in the United States to the historic institutions in Europe, the innovative campuses in Asia, and the vibrant educational environments in Australia, students have a wide range of choices. These universities provide not only academic excellence but also the chance to develop a global perspective and network.",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Blog</h1>
          <p className="text-center w-75 mb-5">
            Some of the important blogs which contains views of our students
            about our organization, their life in Foreign and many more
          </p>
        </div>
      </header>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect bg-dark text-light border-0">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                      <Card.Title className="fs-2 mb-4">
                        {blog.title}
                      </Card.Title>
                      <Card.Text
                        className="text-center"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                      />
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
