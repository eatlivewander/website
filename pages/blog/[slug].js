/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';

export default function BlogPage({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}

export async function getStaticPaths() {
    const result = await client.query({
        query: gql`
            query GetWordPressPosts {
                posts {
                    nodes {
                        slug
                    }
                }
            }
        `,
    });

    return {
        paths: result.data.posts.nodes.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const result = await client.query({
        query: gql`
            query GetWordPressPostsBySlug($slug: String!) {
                postBy(slug: $slug) {
                    title
                    content
                }
            }
        `,
        variables: { slug },
    });

    return {
        props: {
            post: result.data.postBy,
        },
    };
}
