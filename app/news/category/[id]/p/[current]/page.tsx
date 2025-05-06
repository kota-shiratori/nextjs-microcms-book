import { notFound } from 'next/navigation'
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms'
import NewsList from '@/app/_components/NewsList'
import Pagination from '@/app/_components/Pagination'
import { NEWS_LIST_LIMIT } from '@/app/_constants'

export default async function Page(props: {
  params: Promise<{ current: string; id: string }>
}) {
  const { current: currentStr, id } = await props.params

  const current = Number.parseInt(currentStr, 10)
  if (!Number.isFinite(current) || current < 1) notFound()

  const category = await getCategoryDetail(id).catch(notFound)

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  })

  if (news.length === 0) notFound()

  return (
    <>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/news/category/${category.id}`}
      />
    </>
  )
}