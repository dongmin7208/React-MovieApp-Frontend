# Movie App 2021

## 🚩 목차

| translation                                                        |
| ------------------------------------------------------------------ |
| [`🗽 ENG`](https://github.com/dongmin7208/react-movieapp-frontend) |
| [`🎌 日本語`](../jp/README.md)                                     |

- [🗼구현화면](#구현화면)
- [📦실행방법](#실행방법)
- [🔧사용한주요기술](#사용한주요기술)
- [🌐API주소](#api주소)
- [🔎참고사이트](#참고사이트)
- [🌏웹지원](#웹지원)
- [❗느낀점](#느낀점)

### 🗼구현화면

![FRONT](/image/movie.gif)

사이트 보기
https://dongmin7208.github.io/react-movieapp-frontend/#/

#### 📦실행방법

개발환경 버전
node.js -v12.18.4
npm -v 6.14.6
Visual Studio code -v 1.57
git -v 2.32.0.window.1

```sh
$ npm install npx -g
```

```sh
$ npx create-react-app movie_app_2021
```

```sh
$ npm start
```

```sh
$ npm i prop-types
```

```sh
$ npm i axios
```

```sh
$ npm i gh-pages
```

```sh
$ npm run build   <<json.scripts
```

```sh
$ npm run deploy   <<json.scripts
```

### 🔧사용한주요기술

| 이름                                                                                                                    | 설명                          |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`propTypes`](https://github.com/dongmin7208/react-movieapp-frontend/blob/master/src/components/Movie.js)               | 에러 확인가능                 |
| [`HashRouter`](https://github.com/dongmin7208/react-movieapp-frontend/blob/master/src/App.js)                           | URL의 Hash를 활용한 라우터    |
| [`componentDidMount`](https://github.com/dongmin7208/react-movieapp-frontend/blob/master/src/routes/Home.js)            | 컴포넌트의 생명주기:recycle:" |
| [`map`](https://github.com/dongmin7208/react-movieapp-frontend/blob/master/src/routes/Home.js)                          | 가져온 데이터 담은역할        |
| [`@media screen and`](https://github.com/dongmin7208/react-movieapp-frontend/blob/master/src/components/Navigation.css) | 반응형을 위해                 |

### 🌐API주소

https://yts-proxy.now.sh/list_movies.json?sort_by=rating

## 🔎참고사이트

:school: nomadcoders
https://nomadcoders.co/

:book: React Life Cycle
https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8

:book: Responsive Web
https://velog.io/@leeeeunz/TIL-13.-%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-Media-Query

:book: HashRouter And BrowserRouter
https://codingbroker.tistory.com/72

:book: propTypes
https://velog.io/@eunjin/React-PropTypes-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0-%EB%B0%A9%EB%B2%95

## 🌏웹지원

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                               Yes                                                                                |                                                                                   11+                                                                                   |                                                                             Yes                                                                              |                                                                               Yes                                                                                |                                                                                Yes                                                                                 |

## ❗느낀점

기초를 탄탄하게 만들기위해 반복하고 반복했다.
재수강을 하면 할수록 놓쳤던 부분이 나오게되었고
놓쳤던 부분을 공부하면 할수록 많은 배워야 할 것들로 자연스럽게 연결되었다.
응용을해서 내 것으로 완전히 만들기위해 나만의 포트폴리오를 만들예정이다.
마음이 웅장하다.
