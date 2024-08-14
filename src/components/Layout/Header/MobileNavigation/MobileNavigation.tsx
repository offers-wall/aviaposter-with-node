import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import * as classes from './styles';
import { content } from './index';

interface Props {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function MobileNavigation({
  className,
  onClose,
  isOpen,
}: Props) {
  return (
    <AppBar className={className}>
      <Drawer
        anchor='right'
        open={isOpen}
        onClose={onClose}>
        <div css={classes.wrap}>
          <IconButton
            onClick={onClose}
            css={classes.indent}>
            <CloseIcon />
          </IconButton>
          <Divider css={classes.indent} />
          <div css={classes.indent}>
            {content.header.navLinks.map(({ icon: Icon, label, path }) => (
              <Link
                key={label}
                href={path}>
                <ListItemButton>
                  <ListItemIcon
                    sx={{ color: (theme) => theme.palette.text.primary }}>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}

MobileNavigation.defaultProps = {
  className: null,
};
