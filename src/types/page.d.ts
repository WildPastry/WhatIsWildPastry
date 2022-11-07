/* eslint-disable no-unused-vars */
import { ComponentType, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
