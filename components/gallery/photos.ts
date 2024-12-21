import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  // استخدم المسار الصحيح للصور داخل public
  return `/${asset}?w=${width}&q=75`;
}

const photos = [
  {
    asset: "my-project-1.jpg",
    width: 300,
    height: 300,
    alt: "Hiking boots",
  },
  {
    asset: "my-project-2.jpg",
    width: 300,
    height: 300,
    alt: "Purple petaled flowers near a mountain",
  },
  {
    asset: "my-project-3.jpg",
    width: 300,
    height: 300,
    alt: "A person pointing at a beige map",
  },
  {
    asset: "my-project-4.jpg",
    width: 300,
    height: 300,
    alt: "A person pointing at a beige map",
  },
  {
    asset: "my-project-5.jpg",
    width: 300,
    height: 300,
    alt: "A person pointing at a beige map",
  },
  {
    asset: "my-project-6.jpg",
    width: 300,
    height: 300,
    alt: "A person pointing at a beige map",
  },
  {
    asset: "my-project-7.jpg",
    width: 300,
    height: 300,
    alt: "A person pointing at a beige map",
  },
  // أضف المزيد من الصور بنفس الطريقة
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset, width),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo)
);

export default photos;
