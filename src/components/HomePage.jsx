import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import ContentAbout from './ContentAbout'

function HomePage() {
    return (
        <>
            <Navbar />
            <Content />
            <ContentAbout />
            <Footer />
        </>
    )
}

export default HomePage