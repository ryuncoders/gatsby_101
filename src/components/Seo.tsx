import React from "react";
interface ISeo {
  title: string;
}

export default function Seo({ title }: ISeo) {
  return <title>{title} | DevStickers⭐</title>;
}
