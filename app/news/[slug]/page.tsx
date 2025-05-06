import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Params = Promise<{ slug: string }>;
type Search = Promise<{ dk?: string }>;

export default async function Page(props: { params: Params; searchParams: Search }) {
  const { slug } = await props.params;
  const { dk } = (await props.searchParams) ?? {};

  const data = await getNewsDetail(slug, { draftKey: dk }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
