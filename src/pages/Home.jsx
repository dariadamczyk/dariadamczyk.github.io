import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Instagram from '../components/Instagram'
import PhotoSwipe from '../components/PhotoSwipe'

const Home = () => {
    return (
        <div>
            <Header />
            <PhotoSwipe />
            <Instagram />
            <Footer />
        </div>
    )
}

export default Home
