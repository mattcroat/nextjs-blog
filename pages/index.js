import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Next.js is awesome.</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          voluptatibus quis, voluptatem minus, alias ex eos consequuntur id
          cupiditate excepturi maiores ipsum! Pariatur vero sit molestias, nobis
          saepe omnis amet?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum unde
          totam animi quaerat esse.
        </p>
      </section>
    </Layout>
  )
}

export default Home
