import { GetStaticProps } from "next";
import authorsMeta from "../../../meta/authors.yml";
import Layout from "../../components/Layout";
import { AuthorContent } from "../../lib/authors";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import GitHub from "../../assets/github-alt.svg";

type AuthorsProps = {
  authors: AuthorContent[];
};

export default function Authors({ authors }: AuthorsProps) {
  const url = `/authors`;
  return (
    <Layout>
      <BasicMeta url={url} title="코끼리 기술 블로그" />
      <OpenGraphMeta url={url} title="코끼리 기술 블로그" />
      <TwitterCardMeta url={url} title="코끼리 기술 블로그" />
      <div className="container">
        <div className="authors">
          <ul className="author-list">
            {(authors || []).map((author) => {
              return (
                <li className="author-profile" key={author.slug}>
                  <img
                    className="author-profile-img"
                    src={`//avatars.githubusercontent.com/${author.slug}?size=72`}
                  />
                  <div className="author-info">
                    <div className="author-name">{author.name}</div>
                    <div className="author-introduction">
                      {author.introduction}
                      <p className="author-socials">
                        <a href={`//github.com/${author.slug}`}>
                          {" "}
                          <GitHub width={24} height={24} fill={"#222"} />
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 0 1.5rem;
          }

          li {
            list-style: none;
          }
          .authors {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
          }
          .authors li {
            margin-bottom: 1.5rem;
          }
          .author-list {
            flex: 1 0 auto;
          }

          .author-profile {
            display: flex;
            position: relative;
          }

          .author-profile-img {
            border-radius: 100%;
            width: 72px;
            height: 72px;
          }
          .author-info {
            display: inline-block;
            font-size: 95%;
            padding: 2px 20px;
            font-weight: bolder;
          }

          .author-info .author-name {
            font-weight: bolder;
            font-size: 1.5rem;
          }

          .author-info .author-socials {
            margin-top: 4px;
          }

          .author-introduction {
            margin-top: 4px;
            font-size: 0.8rem;
            line-height: 1.4;
          }

          a {
            color: #222;
            display: inline-block;
          }
        `}
      </style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const authors = authorsMeta.authors;
  return {
    props: {
      authors,
    },
  };
};
