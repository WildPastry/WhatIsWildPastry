interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

interface Loading {
  isLoading: boolean;
  isError: boolean;
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
