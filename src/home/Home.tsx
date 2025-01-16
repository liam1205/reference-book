import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import List from './list/List'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <div className="part top">
        <Header></Header>
      </div>
      <div className="part middle">
        <List></List>
      </div>
      <div className="part bottom">
        <Footer></Footer>
      </div>
    </div>
  )
}
export default Home
