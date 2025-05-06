// app/news/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

// ✅ 関数引数で直接型定義。かつ "export default async function Page" の形を保つ
export default async function Page({ params, searchParams }: { params: { slug: string }; searchParams?: { dk?: string } }) {
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
