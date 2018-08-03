import React from 'react';
import classNames from 'classnames';
import './index.css';

export default ({
    value,
    active,
    onChange,
    onChangeType,
    onFiltered,
    children
  }) =>
  <div className="controls">
    <form>
      { children } <input
        type="text"
        value={ value }
        onChange={ onChange }
      />
    </form>
    <div className="controls__row">
      <a
        href=""
        onClick={ (event) => onChangeType('departure', event) }
        className={ classNames('button', { 'button-active': active === 'departure' }) }
      >
        Вылет
      </a>
      <a
        href=""
        onClick={ (event) => onChangeType('arrival', event) }
        className={ classNames('button', { 'button-active': active === 'arrival' }) }
      >
        Прилёт
      </a>
      <button
        onClick={ onFiltered }
        className="button"
      >
        Показать ожидаемые
      </button>
    </div>
  </div>
