import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  [key: string]: any;
};

const Post = ({ content }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-xs md:max-w-4xl mx-auto mb-16">
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(content)),
        }}
      />
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const { slug } = params;

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", slug + ".md"),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      props: {
        frontmatter,
        slug,
        content,
      },
    };
  }

  return {
    props: {},
  };
};
