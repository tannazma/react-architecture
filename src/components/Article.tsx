interface ArticleProps {
  title: string;
  author: string;
}

const Article = (props: ArticleProps) => {
  return (
    <>
      <div>
        <h1 id="title">{props.title}.</h1>
        <div id="content">
          <p>Today, nothing of importance has happened</p>
          <img
            src="/image-of-nothing.png"
            alt="An image of nothing"
            width={200}
            height={200}
          />
        </div>
        <p id="attribution">Written by {props.author}</p>
      </div>
    </>
  );
};
export default Article;
