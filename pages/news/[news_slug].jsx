import { useRouter } from "next/router";

const SomethingImporant = () => {
  const router = useRouter();

  const slug = router.query.news_slug;
  return (
    <div>
      <h1>Breaking News:</h1>
      <small>{slug}</small>
    </div>
  );
};

export default SomethingImporant;
