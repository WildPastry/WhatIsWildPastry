interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

interface Loading {
  isLoading: boolean;
  isError: boolean;
}

interface Hover {
  src?: string | StaticImport;
  alt?: string | StaticImport;
  width: number;
  height: number;
}

interface HoverImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HoverSpotlight {
  width: number;
  height: number;
}
