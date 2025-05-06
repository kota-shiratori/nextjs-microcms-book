import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";

export default async function Page(props: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await props.searchParams;

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q,
  });

  return (
    <>
      <SearchField defaultValue={q} />
      <NewsList news={news} />
    </>
  );
}