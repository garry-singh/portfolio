import Link from "next/link";

type Props = {
  post: {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
  };
};

const Post = ({ post }: Props) => {
  const { slug, frontmatter } = post;

  return (
    <div>
      <p>{frontmatter.title}</p>
      <p>{frontmatter.date}</p>
      <p>{frontmatter.excerpt}</p>
      <Link href={`/blog/${slug}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
};

export default Post;
