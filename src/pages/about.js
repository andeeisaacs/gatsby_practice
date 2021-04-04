import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About" />
            <h1>About page</h1>
            <p> A lil' bio about Andee will live here.</p>
            <p> Want to chat? <Link to="/contact">Contact me!</Link></p>
        </Layout>
    )
}

export default AboutPage