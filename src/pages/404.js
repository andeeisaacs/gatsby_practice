import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
return (
    <Layout>
        <h1> OH NO, THE PAGE DOES NOT EXIST!</h1>
        <p><Link to='./'>Go back to the home page</Link></p>
    </Layout>
    )
}

export default NotFound