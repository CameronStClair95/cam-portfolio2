import React, { useState } from 'react'
import './index.scss'

const AboutMe = () => {
  const [showUXUI, setShowUXUI] = useState(false)
  const [showWebsites, setShowWebsites] = useState(false)
  const [showPainting, setShowPainting] = useState(false)

  return (
    <div className="about-me-section">
      <h2>About Me</h2>
      <div className="divider"></div>

      <div className="content-wrapper">
        <div className="left-content">
          <p>
            I'm a Full-stack Developer with a deep passion for UX/UI and design.
            Drawing from a rich background in applied psychology, sociology, and
            project management, I focus on integrating an understanding of human
            behaviour into crafting user-centric digital solutions.
            <br />
            <br />
            My expertise lies in developing intuitive websites and applications,
            ensuring both new and veteran businesses achieve a seamless online
            presence.
          </p>
        </div>

        <div className="right-content">
          <h2>Your One-Stop Shop For:</h2>
          <div className="service" onClick={() => setShowUXUI(!showUXUI)}>
            <div className="service-title">
              <div className="circle">1</div>
              UX/UI
              <span className="arrow">{showUXUI ? '↑' : '↓'}</span>
            </div>
            {showUXUI && (
              <p className={showUXUI ? 'show' : ''}>
                Leveraging a solid foundation in applied psychology and human
                behavioural patterns, I specialise in creating intuitive and
                user-centric UX/UI designs. My proficiency in sophisticated
                design tools like Figma, combined with a keen understanding of
                diverse audience needs, allows me to craft digital interfaces
                that are not only visually appealing but also functionally
                seamless. With a deep-rooted commitment to inclusivity and
                diversity, I ensure that every design resonates with a broad
                spectrum of users, ensuring a delightful user experience.
              </p>
            )}
          </div>

          <div
            className="service"
            onClick={() => setShowWebsites(!showWebsites)}
          >
            <div className="service-title">
              <div className="circle">2</div>
              Websites
              <span className="arrow">{showWebsites ? '↑' : '↓'}</span>
            </div>
            {showWebsites && (
              <p className={showWebsites ? 'show' : ''}>
                A skilled full-stack developer, I'm adept at bringing intricate
                web designs to life with precision and efficiency. Harnessing
                the power of modern development tools and languages like
                JavaScript, React, Node.js, and more, I've successfully built
                and launched various projects ranging from subscription
                platforms to travel management apps. My projects underscore my
                ability to integrate robust functionality with captivating
                aesthetics, culminating in websites that captivate and serve
                users effectively.
              </p>
            )}
          </div>

          <div
            className="service"
            onClick={() => setShowPainting(!showPainting)}
          >
            <div className="service-title">
              <div className="circle">3</div>
              Painting/Prints
              <span className="arrow">{showPainting ? '↑' : '↓'}</span>
            </div>
            {showPainting && (
              <p className={showPainting ? 'show' : ''}>
                While my core expertise lies in digital design and development,
                I'm also deeply passionate about traditional art forms. My work
                in painting and prints showcases a unique blend of creativity
                and technique, resulting in pieces that captivate the viewer's
                senses. Each piece embodies a narrative, capturing emotions,
                stories, and moments in a timeless frame. Whether it's a modern
                abstract or a traditional portrait, my artworks aim to evoke
                emotions and inspire thought.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
