import Image from 'next/image';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@/components/Outlet/Button';
import { items, Item } from '@/components/Outlet/Items/itemsData';
import SnackBar from '@/components/SnackBar';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
import * as generalClasses from '@/styles/general';
import * as classes from './styles';

export default function ItemCard({ item }: { item: Item }) {
  const { label, path, price } = item;
  const { addItem } = useShoppingCartContext();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  return (
    <div>
      <Card css={classes.card}>
        <CardActionArea onClick={() => addItem(item)}>
          <CardMedia>
            <Image
              alt={`${label} image`}
              css={classes.image}
              width={307}
              height={276}
              objectFit='contain'
              src={path}
            />
          </CardMedia>
        </CardActionArea>
        <div css={classes.cardContent}>
          <Typography
            css={generalClasses.bold}
            sx={{ mb: '18px' }}
            textAlign='center'>
            {label}
          </Typography>
          <div css={classes.wrap}>
            <Typography
              color='primary'
              css={generalClasses.bold}
              textAlign='start'>
              {price} {items.content.currency}
            </Typography>
            <CardActions css={classes.cardActions}>
              <Button
                css={classes.button}
                text={items.itemButton}
                size='small'
                onClick={() => {
                  addItem(item);
                  setIsSnackbarOpen(true);
                }}
              />
            </CardActions>
          </div>
        </div>
      </Card>
      <SnackBar
        isOpen={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message={`${label} add to cart`}
      />
    </div>
  );
}
