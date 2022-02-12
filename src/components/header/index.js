import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import './styles.scss';

const header = () => {
  return (
    <>
      <Box onClick={(event) => event.preventDefault()} className="header">
        <Link to="/">Get a random HERO</Link>
        <Link to="/heros">Search For a HERO</Link>
      </Box>

      <Outlet />
    </>
  );
};

export default header;
