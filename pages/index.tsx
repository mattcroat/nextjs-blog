import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Date from '@/components/date'
import Layout, { siteTitle } from '@/components/layout'

import { getSortedPostsData } from '@/lib/posts'

import utilStyles from '@/styles/utils.module.css'

interface AllPostsDataProps {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

const Home = ({ allPostsData }: AllPostsDataProps) => {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home
