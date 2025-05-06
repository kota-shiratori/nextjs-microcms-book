// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    dk?: string;
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams?.dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}