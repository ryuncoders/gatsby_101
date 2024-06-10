import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <div>
      <Layout title="Welcome to DevStickers">
        <StaticImage
          height={300}
          alt="Coding Img"
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Layout>
    </div>
  );
}

export const Head = () => <Seo title="Home" />;
