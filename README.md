This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Табло аэропорта
Для получения данных о расписании использовал этот сервис: [Aviation Edge](https://aviation-edge.com/developers/)

Результат можно посмотреть [здесь](https://i-obraztcov.github.io/board-flights/)

# Tiker
```
function Ticker() {
    this._i = 0
};
Ticker.prototype = { 
    tick: function() {
        console.log(this._i++); 
    }
};
var ticker = new Ticker();
setInterval(ticker.tick, 1000);
```
```this._i``` не увеличивается потому что нет привязки к контексту, 
```setInterval``` получил функцию ticker.tick, но не её контекст.

Исправить это можно с помощью создания функции обёртки: 
```setInterval(() => ticker.tick(), 1000);```;

Или использовать ```.bind()``` для привязки контектса ```setInterval(ticker.tick.bind(ticker), 1000);```
