import React from 'react';
import './index.css';

const isSearched = searchTerm => item =>
  item.flight.number.includes(searchTerm);

export default ({ list, pattern, type, isLoading }) =>
  <table className="table">
    <thead>
      <tr className="table__header">
        <th>Номер рейса:</th>
        <th>{ `${type === 'departure' ? 'Прибытие в:' : 'Вылет из:'} (ICAO Code)` }</th>
        <th>Авиакомпания:</th>
        <th>Статус:</th>
      </tr>
    </thead>
    <tbody>
      { !isLoading
        ? <tr className="table__row">
            <td colSpan="4">Loading...</td>
          </tr>
        : list.filter(isSearched(pattern)).map(item =>
            <tr className="table__row" key={ item.flight.icaoNumber }>
              <td>{ item.flight.number }</td>
              <td>{ `${type === 'departure' ? item.arrival.icaoCode : item.departure.icaoCode}` }</td>
              <td>{ item.airline.name }</td>
              <td>{ item.status }</td>
            </tr>
      ) }
    </tbody>
  </table>
