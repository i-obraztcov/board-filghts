import React, { Component } from 'react';
import axios from 'axios';
import Controls from '../Controls';
import Table from '../Table';
import {
  PATH_BASE,
  PATH_SEARCH,
  USER_KEY,
  ITA_CODE,
  DEFAULT_TYPE } from '../../constants';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchNum: '',
      type: DEFAULT_TYPE,
      isLoading: false,
    }

    this.setSearchNumberFlight = this.setSearchNumberFlight.bind(this);
    this.fetchSearchTypes = this.fetchSearchTypes.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onFiltered = this.onFiltered.bind(this);
  }

  setSearchNumberFlight(result) {
    this.setState({ result });
  }

  onSearchChange(event) {
    this.setState({ searchNum: event.target.value });
  }

  onChangeType(type, event) {
    event.preventDefault();
    this.setState({
      type,
      isLoading: false
    });

    this.fetchSearchTypes(type);
  }

  fetchSearchTypes(type) {
    axios(`${PATH_BASE}${PATH_SEARCH}?key=${USER_KEY}&iataCode=${ITA_CODE}&type=${type}`)
      .then(result => this.setSearchNumberFlight(result.data))
      .then(() => this.setState({ isLoading: true }))
      .catch(error => error);
  }

  onFiltered() {
    const filteredResult = this.state.result.filter(elem => elem.status === 'scheduled');
    this.setState({ result: filteredResult });
  }

  componentDidMount() {
    const { type } = this.state;
    this.fetchSearchTypes(type);
  }

  render() {
    const {
      searchNum,
      result,
      type,
      isLoading,
    } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Controls
            value={ searchNum }
            active={ type }
            onChange={ this.onSearchChange }
            onChangeType={ this.onChangeType }
            onFiltered={ this.onFiltered }
          >
            Поиск по номеру рейса:
          </Controls>
        </div>
        { result ?
          <Table
            list={ result }
            pattern={ searchNum }
            type={ type }
            isLoading={ isLoading }
          />
          : null
        }
      </div>
    );
  }
}

export default App;
