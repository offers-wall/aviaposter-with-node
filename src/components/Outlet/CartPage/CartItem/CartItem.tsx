import { ChangeEvent } from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { items } from '@/components/Outlet/Items/itemsData';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
import { ShoppingCartItemType } from '@/types/shoppingCartContext';
import formatNumberInputValue from '@/utils/formatNumberInputValue';
import * as classes from './styles';

interface Props {
  item: ShoppingCartItemType;
  className?: string;
}

const ITEM_IMAGE_DIMENSIONS = {
  height: 105,
  width: 105,
};

export default function CartItem({ item, className }: Props) {
  const { addItem, deleteItem } = useShoppingCartContext();

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = formatNumberInputValue(event.target.value) || 1;
    addItem(item, newQuantity);
  };

  return (
    <div
      className={className}
      css={classes.mainWrap}>
      <Image
        alt={`${item.label} image`}
        css={classes.image}
        height={ITEM_IMAGE_DIMENSIONS.height}
        width={ITEM_IMAGE_DIMENSIONS.width}
        src={item.path}
      />
      <Typography
        component='span'
        variant='h6'>
        {item.label}
      </Typography>
      <div css={classes.wrap}>
        <IconButton onClick={() => deleteItem(item.id)}>
          <RemoveCircleIcon
            fontSize='large'
            sx={{ color: (theme) => theme.palette.text.primary }}
          />
        </IconButton>
        <TextField
          css={classes.field}
          label='Quantity'
          placeholder='Enter quantity'
          value={item.quantity}
          onChange={handleQuantityChange}
          type='number'
          InputProps={{ inputProps: { min: 1 }, inputMode: 'numeric' }}
        />
        <IconButton onClick={() => addItem(item)}>
          <AddCircleIcon
            fontSize='large'
            sx={{ color: (theme) => theme.palette.text.primary }}
          />
        </IconButton>
      </div>
      <Typography
        component='span'
        variant='h6'>
        {item.price * item.quantity}
        {items.content.currency}
      </Typography>
    </div>
  );
}

CartItem.defaultProps = {
  className: null,
};
