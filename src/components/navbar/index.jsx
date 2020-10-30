import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <h3 id={styles.siteTitle}>my site?!</h3>
      <Link to="/">Go home!</Link>
      <Link to="/contact/">Contact Me</Link>
      <Link to="/clock/">What time is it?</Link>
      <Link to='/my-posts/'>View Posts</Link>
    </nav>
  )
}