import Typography from '@mui/material/Typography';
import { Routes } from '@/components/Layout/Header/headerData';
import Button from '@/components/Outlet/Button';
import * as generalClasses from '@/styles/general';
import ItemCard from './ItemCard';
import { items } from './itemsData';
import * as classes from './styles';

interface Props {
  section?: boolean;
  className?: string;
}

export default function Items({ className, section }: Props) {
  return (
    <section
      className={className}
      css={generalClasses.outletPadding}>
      <Typography
        component='h2'
        css={[classes.title, generalClasses.bold]}
        textAlign='center'
        variant='h3'>
        {section ? items.content.sectionTitle : items.content.title}
      </Typography>
      <div css={section ? [classes.wrap, classes.section] : classes.wrap}>
        {section
          ? items.items.slice(5).map((item) => (
              <ItemCard
                key={item.label}
                item={item}
              />
            ))
          : items.items.map((item) => (
              <ItemCard
                key={item.label}
                item={item}
              />
            ))}
      </div>
      {section && (
        <Button
          href={Routes.Second_Page}
          size='large'
          sx={{ display: 'block', m: '38px auto 0px', width: '120px' }}
          text={items.content.button}
        />
      )}
    </section>
  );
}

Items.defaultProps = {
  section: null,
  className: null,
};
