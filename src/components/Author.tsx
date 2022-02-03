import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
};
export default function Author({ author }: Props) {
  return (
    <>
      <div className="author-info">
        <img
          className="author-profile-img"
          src={`//avatars.githubusercontent.com/${author.slug}?size=24`}
        />
        <a href={`//github.com/${author.slug}`}>
          <span>{author.name}</span>
        </a>
      </div>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }

          .author-info {
            display: flex;
            align-items: center;
          }

          .author-profile-img {
            border-radius: 100%;
            width: 24px;
            height: 24px;
            margin-right: 4px;
          }
        `}
      </style>
    </>
  );
}
