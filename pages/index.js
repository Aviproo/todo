import AddItem from "@/components/AddItem";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>To Do app</title>
      </Head>
      <AddItem />
    </Fragment>
  );
}
