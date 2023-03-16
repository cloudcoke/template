# 필요한 패키지

```shell
npm install react-router-dom redux redux-thunk redux-persist react-redux axios styled-components
```

- react-router-dom : 라우팅 구현을 위해 사용
- redux : 전역 상태 관리를 위해 사용
- redux-thunk : 상태 변경 전에 비동기 작업을 처리하기 위해 사용
- redux-persist : redux의 상태를 브라우저의 로컬 스토리지에 저장하기 위해 사용
- react-redux : react에서 리덕스를 사용하기 위해 사용, Provider로 전역 상태를 하위 컴포넌트에게 넘겨줌
- axios : HTTP 요청을 보내고 받기 위해 사용
- styled-components : JavaScript 파일에서 CSS 스타일을 작성하고 관리하기 위해 사용

```shell
npm install -D redux-devtools-extension
```

- redux-devtools-extension : redux의 상태 변화와 action, dispatch 과정을 확인하기 위해 사용
