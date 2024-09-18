import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="main" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Hello, I'm Navya Talwar!</h1>
        <p>
          I'm currently pursuing my degree at IIT Jammu, and I specialize in Data Structures & Algorithms (DSA) and Web Development. 
          I’m passionate about coding and building innovative solutions. Recently, I worked on a project to develop a chat application that allows seamless communication between users.
        </p>
        <p>
          This homepage highlights my journey in programming, especially in DSA and Web Development, and showcases the skills I've honed through various projects.
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>DSA Expertise</h2>
          <p>
            With strong foundational knowledge in Data Structures and Algorithms, I have worked on solving complex problems efficiently. 
            My work in this area helps me to develop optimized solutions for real-world applications.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Web Development</h2>
          <p>
            My web development skills include designing and building responsive, user-friendly websites and applications. 
            I’m proficient in front-end and back-end technologies, ensuring smooth and dynamic web experiences.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Chat App Project</h2>
          <p>
            I recently developed a chat application as part of a project assignment. 
            The app allows users to send real-time messages and communicate effectively. It was an exciting challenge to create a secure and efficient chat system.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>
  </main>
  <footer className="container">
    <p>© Navya Talwar 2024</p>
  </footer>
</>
    </div>
  )
}

export default Homepage
