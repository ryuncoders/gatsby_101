import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <div>
      <Layout title="Welcome to DevStickers">
        <span></span>
      </Layout>
    </div>
  );
}

export const Head = () => <Seo title="Home" />;
