import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact" />
            <h1> Contact Andee</h1>
            <ul>
                <li>Email: AndeeIsaacs@gmail.com</li>
                <li>Tel: 818-673-8945</li>
                <li>GitHub: <a href="http://www.github.com/andeeisaacs" target="_blank">github.com/andeeisaacs</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/andeedeanisaacs/" target="_blank"> linkedin.com/in/andeedeanisaacs </a></li>
            </ul>
         </Layout>
    )
}

export default ContactPage