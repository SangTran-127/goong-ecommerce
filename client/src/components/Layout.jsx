import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from "./Header"
import Footer from "./Footer"
import Routes from "../routes/Routes"

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="container">
                    <div className="main">
                        <Routes />
                    </div>
                </div>
                <Footer />
            </div>

        </BrowserRouter>
    )
}

export default Layout