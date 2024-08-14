import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import BackgroundSection from '@/components/Outlet/BackgroundSection';
import Button from '@/components/Outlet/Button';
import Container from '@/components/Outlet/Container';
import { Routes } from '@/components/Layout/Header/headerData';
import * as generalClasses from '@/styles/general';
import { BackgroundPaths, firstBlock } from './firstBlockData';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function FirstBlock({ className }: Props) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <section
      className={className}
      css={[classes.section, generalClasses.sectionWithBackgroundImage]}>
      <BackgroundSection
        css={[generalClasses.outletPadding]}
        path={isMobile ? BackgroundPaths.Mobile : BackgroundPaths.Desktop}>
        <Container>
          <div css={classes.wrap}>
            <Typography
              component='h1'
              css={generalClasses.bold}
              variant='h3'>
              {firstBlock.title}
            </Typography>
            <Typography
              component='p'
              variant='h5'
              dangerouslySetInnerHTML={{ __html: firstBlock.description }}
            />
            <Button
              href={Routes.Second_Page}
              size='large'
              text={firstBlock.buttonText}
            />
          </div>
        </Container>
      </BackgroundSection>
    </section>
  );
}

FirstBlock.defaultProps = {
  className: null,
};
