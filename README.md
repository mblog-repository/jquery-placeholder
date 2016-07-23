# jquery-placeholder

Placeholder для старых браузеров и Internet Explorer версии &lt; 10

[Демо](http://codepen.io/nikitakiselev/pen/OXkrNa)

[Статья на блоге](https://nikitakiselev.ru/placeholder-v-ie-i-prochih-staryh-brauzerah)

## Установка

```javascript
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="jquery.placeholder.js"></script>
```

## Инициализация

```javascript
var options = {
    color: 'green' // placeholder text color
};

$(element).placeholder(options);
```

## Пример использования

```html
<input type="search" class="placeholder-input-1" data-placeholder="Введите фразу для поиска"/>
<input type="text" class="placeholder-input-2" data-placeholder="Введите ваше имя" data-placeholder-color="gray">
```

```javascript
$('.placeholder-input-1').placeholder();
$('.placeholder-input-2').placeholder();
```