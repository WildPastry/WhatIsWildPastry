interface StaticImage {
  src?: string | StaticImageData;
  className?: string;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
