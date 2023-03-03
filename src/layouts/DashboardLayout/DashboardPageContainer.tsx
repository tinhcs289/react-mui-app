import { useDashboardLayout } from '@/providers/DashboardLayoutProvider';
import { styled } from '@mui/material';
import type { ContainerProps } from '@mui/material/Container';
import Container from '@mui/material/Container';
import { useMemo } from 'react';
import { DEFAULT_WIDTH } from './constants';

const ContainerStyled = styled(Container)<ContainerProps>(({ theme }) => ({
  padding: `${theme.spacing(1, 1, 1, 1)} !important`,
  marginBottom: theme.spacing(2),
  height: `calc(100% - ${theme.spacing(8 + 4)})`, // 8 = height of Appbar, 4 = 2 * my(2)
}));
export default function DashboardPageContainer(props: ContainerProps) {
  const { children, ...otherProps } = props;
  const [pageMaxWidth] = useDashboardLayout((s) => s.pageMaxWidth);
  const maxWidth = useMemo(() => pageMaxWidth || DEFAULT_WIDTH, [pageMaxWidth]);
  return (
    <ContainerStyled {...otherProps} maxWidth={maxWidth}>
      {children}
    </ContainerStyled>
  );
}
