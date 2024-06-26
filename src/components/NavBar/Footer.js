import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import { FacebookURL, GithubURL, InstagramURL, LinkedinURL, TwitterURL } from '../../common/social'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="social-links">
        <a href={FacebookURL} target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
        <a href={GithubURL} target="_blank" rel="noopener noreferrer">
          <GitHub />
        </a>
        <a href={InstagramURL} target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
        <a href={TwitterURL} target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href={LinkedinURL} target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Bibek Koirala | All Rights Reserved
      </div>
    </div>
  </footer>
  )
}

export default Footer