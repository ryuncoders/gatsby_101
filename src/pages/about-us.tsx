import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <div>
      <Layout title="about us">
        <span></span>
      </Layout>
    </div>
  );
}

export const Head = () => <Seo title="About Us" />;
