interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

interface Loading {
  isLoading: boolean;
  isError: boolean;
}
