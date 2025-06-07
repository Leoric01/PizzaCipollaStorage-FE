import { Header, Root } from '@components';
import { FC, PropsWithChildren } from 'react';

export const LayoutWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Root>
      <Header />
      {children}
    </Root>
  );
};
