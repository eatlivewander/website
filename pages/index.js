/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Eat Live Wander</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>This site uses Next and WordPress</h1>
                <ul>
                    {posts.map(({ title, slug, date }) => (
                        <li key={slug}>
                            <Link href={`/blog/${slug}`}>
                                <a>
                                    [{date}] {title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const result = await client.query({
        query: gql`
            query GetWordPressPosts {
                posts {
                    nodes {
                        title
                        slug
                        date
                    }
                }
            }
        `,
    });

    return {
        props: {
            posts: result.data.posts.nodes,
        },
    };
}
