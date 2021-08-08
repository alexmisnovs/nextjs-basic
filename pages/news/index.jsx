import Link from "next/link";
const NewsPage = () => {
  return (
    <div>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/something-interesting">Something Interesting</Link>
        </li>
        <li>
          <Link href="/news">News Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
