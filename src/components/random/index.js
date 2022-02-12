import React from 'react';
import axios from '../../Utils/axios.js';
import consts from '../../Utils/consts';
import Button from '@mui/material/Button';

import HeroCard from '../heroCard';
import './styles.scss';

class RandomHero extends React.Component {
  state = {
    loading: false,
  };

  constructor(props) {
    super();
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <div className="randomCont">
          <Button
            className="mainBtn"
            variant="outlined"
            size="large"
            disabled={this.state.loading ? true : false}
            onClick={(e) => {
              e.preventDefault();
              this.getRandomHero();
            }}
          >
            Get a Random HERO!
          </Button>
          {this.state.loading && <span> ... Loading ...</span>}
          {this.state.hero && <HeroCard hero={this.state.hero} />}
        </div>
      </>
    );
  }

  getRandomHero = async () => {
    this.setState({ loading: true });
    let generatedId = this.generateRandomID();
    const response = await axios.get(
      `?apikey=${consts.API_KEY}&i=tt${generatedId}&type=movie`
    );

    if (
      response.data.Response === 'False' ||
      response.data.Type === 'episode'
    ) {
      this.getRandomHero();
    } else {
      this.setState({
        loading: false,
        hero: response.data,
      });
    }
  };
  // return 7 digits
  generateRandomID = () => {
    return Math.floor(Math.random() * 9000000) + 1000000;
  };
}

export default RandomHero;
