import * as generalClasses from '@/styles/general';
import ServiceItem from './ServiceItem';
import { shopServices } from './shopServicesData';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function ShopServices({ className }: Props) {
  return (
    <section
      className={className}
      css={[classes.mainWrap, generalClasses.outletPadding]}>
      <div css={classes.wrap}>
        {shopServices.map(({ id, title, subtitle, path }) => (
          <ServiceItem
            key={id}
            title={title}
            subtitle={subtitle}
            path={path}
          />
        ))}
      </div>
    </section>
  );
}

ShopServices.defaultProps = {
  className: null,
};
