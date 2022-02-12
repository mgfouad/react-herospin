import React from 'react';
import axios from '../../Utils/axios.js';
import consts from '../../Utils/consts';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import HeroCard from '../heroCard';

import './listing.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import RandomHero from './components/random';

class ListingHero extends React.Component {
  state = {
    loading: false,
    HeroListing: [],
    searchText: '',
    page: 1,
  };

  constructor(props) {
    super();
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            this.resetPager(this.getHeros);
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search For a Hero !"
            variant="outlined"
            value={this.searchText}
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              this.resetPager(this.getHeros);
            }}
          >
            Search
          </Button>
        </Box>
        <List className="heroListing">
          {this.state.HeroListing ? (
            this.state.HeroListing.map((hero, index) => {
              return <HeroCard hero={hero} key={index} />;
            })
          ) : (
            <div className="noData">Try another HERO name !</div>
          )}
        </List>
        {this.state.HeroListing?.length > 0 && (
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(this.state.numberOfResults / 10)}
              onChange={this.getPagedHero}
            />
          </Stack>
        )}
      </>
    );
  }

  handleChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  resetPager = (getHeros) => {
    this.setState({ page: 1 }, getHeros);
  };
  getPagedHero = async (e, value) => {
    if (value !== this.state.page) {
      this.setState(
        {
          page: value,
        },
        this.getHeros
      );
    }
  };
  getHeros = async () => {
    this.setState({ loader: true });
    const response = await axios.get(
      `?apikey=${consts.API_KEY}&type=movie&page=${this.state.page}&s=${this.state.searchText}`
    );

    this.setState({
      HeroListing: response.data.Search,
      loader: false,
      numberOfResults: response.data.totalResults,
    });
  };
}

export default ListingHero;
