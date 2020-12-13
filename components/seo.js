import { NextSeo } from "next-seo";

export const siteTitle = "You Go, Girl!";
export const siteDescription = "Inspirational Quote Generator";

export default function Seo() {
  return (
    <NextSeo
      title={siteTitle}
      description={siteDescription}
      openGraph={{
        title: "You Go, Girl!",
        description: "Inspirational Quote Generator",
        images: [
          {
            url: "https://i.ibb.co/Vvf95L2/you-go-girl.png",
            width: 416,
            height: 500,
            alt: "You Go Girl! Logo",
          },
        ],
      }}
    />
  );
}
