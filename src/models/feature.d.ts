interface Loading {
  isLoading: boolean;
  isError: boolean;
}

interface IHoverImage {
  content: JSX.Element;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface IHoverSpotlight {
  content: JSX.Element;
  width: number;
  height: number;
}

interface IMeme {
  click: () => void;
}

interface IMemeText {
  id: number;
  name: string;
}
