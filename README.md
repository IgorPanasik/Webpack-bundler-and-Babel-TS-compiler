# Webpack Bundler and Babel/TS Compiler

Этот проект предоставляет шаблон для быстрого старта разработки с использованием Webpack, Babel и TypeScript. Сборка включает поддержку различных типов файлов, таких как изображения, шрифты, SCSS и SVG, с хешированием для лучшего кэширования и управления версиями.

## Как начать работу

1. Клонируйте репозиторий.
2. Установите зависимости с помощью `yarn install`.
3. Запустите проект в режиме разработки с помощью `yarn start`.

## Запуск проекта

**Режим разработки**: yarn start
**Сборка для продакшн**: yarn build

## Структура проекта

**src/**: Исходный код приложения.
**public/**: Статические файлы, такие как `index.html` шрифты, картинки.
**dist/**: Директория, куда Webpack помещает собранные файлы.

## Plugins для Webpack

**HtmlWebpackPlugin**: Создает HTML файл, который подключает все собранные скрипты.

**ProgressPlugin**: Отображает прогресс сборки.

**CleanWebpackPlugin**: Очищает папку dist перед каждой сборкой.

**MiniCssExtractPlugin**: Извлекает CSS в отдельные файлы.

**CopyPlugin**: Копирует файлы из public в dist.

**DefinePlugin**: Определяет глобальные константы.

**HotModuleReplacementPlugin**: Включает горячую замену модулей в режиме разработки.

**ReactRefreshWebpackPlugin**: Обеспечивает поддержку Fast Refresh для React в режиме разработки.

## Loaders для Webpack

**babel-loader**: Для обработки TypeScript и JavaScript файлов.
**presets**:
**@babel/preset-env**: Поддержка современных возможностей JavaScript.
**@babel/preset-react**: Поддержка JSX и React.
**@babel/preset-typescript**: Поддержка TypeScript.

## Loaders для Webpack

**scssLoaderRule**: Обрабатывает SCSS файлы и включает поддержку CSS модулей.
**style-loader**: Встраивает CSS в DOM в режиме разработки.
**MiniCssExtractPlugin.loader**: Извлекает CSS в отдельные файлы в режиме production.
**sass-loader**: Обрабатывает SCSS файлы.
**imageLoaderRule**: Обрабатывает изображения и помещает их в папку assets.
**fontLoaderRule**: Обрабатывает шрифты и помещает их в папку assets/fonts с хешированием.
**svgLoaderRule**: Обрабатывает SVG файлы и помещает их в папку assets.

## Resolvers для Webpack

**extensions**: Расширения файлов, которые будет обрабатывать Webpack.
**modules**: Модули, которые будут использоваться Webpack для поиска зависимостей.
**mainFiles**: Основные файлы, которые будет искать Webpack.
**alias**: Алиасы для упрощения импорта модулей.

## Dev Server

**port**: Порт, на котором будет запущен сервер разработки.
**open**: Автоматически открывает браузер при запуске сервера.
**historyApiFallback**: Поддержка истории API.
**hot**: Включает горячую замену модулей.

## Babel Configuration

### Основные файлы конфигурации

1. **`babelPlugins.ts`**: Содержит плагины для Babel.
2. **`babelPresets.ts`**: Содержит пресеты для Babel.
3. **`babel.config.ts`**: Основная конфигурация Babel, объединяющая пресеты и плагины.

## Plugins для Babel

**react-refresh/babel**: Плагин, обеспечивающий поддержку Hot Module Replacement (HMR) и Fast Refresh для React в режиме разработки.

## Presets для Babel

**@babel/preset-env**: Пресет, обеспечивающий поддержку современных возможностей JavaScript.
**targets**: Настраивает цели, для которых будет производиться трансформация (в данном случае, текущая версия Node.js).

**@babel/preset-react**: Пресет для поддержки JSX и React.
**runtime**: Автоматический режим, позволяющий использовать новый JSX трансформ React.
**development**: Включение дополнительных возможностей для разработки, когда режим development.

**@babel/preset-typescript**: Пресет для поддержки TypeScript.
**isTSX**: Указывает, что файлы могут содержать JSX.
allExtensions: Позволяет обрабатывать все расширения файлов.

## Декларации global.d.ts

**declare module ".module.scss"\***: Указывает TypeScript, что любые файлы с расширением .module.scss следует считать модулями. Это позволяет импортировать SCSS модули в компоненты React.
**IClassNames**: Интерфейс, определяющий структуру объекта классов, где ключи — это имена классов, а значения — строки.
**export = classNames**: Экспортирует объект классов, который может быть использован в компонентах для доступа к классам CSS.
