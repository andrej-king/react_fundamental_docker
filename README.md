# Начало работы с приложением Create React

Проект был создан с помощью [Create React App](https://github.com/facebook/create-react-app).

## Запуск проекта

### `make init`

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) чтобы просмотреть его в браузере.

Страница перезагрузится, если вы внесете правки. \
Вы также увидите любые ошибки линта в консоли.

### Базовые React хуки
`useState()` Получение данных с управляемого инпута\
`useRef()` Получение данных с неуправляемого инпута (Получение доступа напрямую к DOM элементу.)\
`useMemo(callback, deps)` Кеширует данные, пока не измениться какой-либо из параметров \
`useEffect(callback, deps)` Следит за стадиями компонентов (mount, update, unmount). Пустым массивом deps, функция отработает 1 раз, если передать параметр функция будет следить за изменениями и при изменениях будет срабатывать, если deps пустой массив но внутри callback есть return, функция отработает в конце (unmount).\
`useCallback()` \
`useContext()` Глобальное хранилище (доступ из любого компонента).

### Отладка для React
[React Developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) расширение для браузера.

### Стилизация
[React Transition Group](https://reactcommunity.org/react-transition-group/) Библиотека для анимирования элементов.

### Роунтинг
[React Router Dom](https://reactrouter.com/web/guides/quick-start) Постраничная навигация в браузере.

### Css модули для изоляции стилей
`Button.module.css` Пример названия файла, для изолированных стилей
