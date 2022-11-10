# 원티드 프리온보딩 프론트엔드 - Week 3-1

## 10팀 멤버 구성

<br/>

<div align=center>
	
| <img src="https://avatars.githubusercontent.com/u/26901045?v=4" width="130" height="130" />  | <img src="https://avatars.githubusercontent.com/u/105492051?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/92094314?v=4" width="130" height="130"/> | <img src="https://avatars.githubusercontent.com/u/101456751?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------:  | :-----------------------------------------------------------------------------------------:  | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------:  |
|                                    :full_moon: 오지수                                         |                                :last_quarter_moon: 정억화                                    |                                           송완준                                            |                                            김미성                                            |
|                [:globe_with_meridians:silviaoh](https://github.com/silviaoh)                 |                 [:globe_with_meridians:oka7759](https://github.com/oka7759)                  |            [:globe_with_meridians:natural-nine](https://github.com/natural-nine)           |                  [:globe_with_meridians:kimitt](https://github.com/kimitt)                  |

| <img src="https://avatars.githubusercontent.com/u/83964261?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/103277726?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/93189402?v=4"  width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/109638284?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                                           이학성                                            |                                            김숙영                                            |                                            김인표                                            |                                           박민규                                            |
|            [:globe_with_meridians:Hakseong-Lee](https://github.com/Hakseong-Lee)            |                 [:globe_with_meridians:Maiowol](https://github.com/Maiowol)                  |                [:globe_with_meridians:kiminpyo](https://github.com/kiminpyo)                 |              [:globe_with_meridians:kyle970320](https://github.com/kyle970320)              |

</div>

<br/>

## 프로젝트 요약

### 📆 기간

#### 22년 11월 08일 ~ 22년 11월 10일

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"/>   
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>  
   <img src="https://img.shields.io/badge/react_recoil-3DDC84?style=for-the-badge&logo=react-recoil-async&logoColor=white"/> 
</div>
<br/>

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

<br/>

### 배포 링크

[배포링크 바로가기](https://pre-onboarding-7th-3-1-10.vercel.app/)

<br/>

## 프로젝트 설명

### 📂 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">

```
🗂 src
 ┣ 📁 hooks
   ┣ useCache.ts
   ┣ useMoveUpAndDown.ts
   ┗ useTextDebounce.ts
 ┣ 📁 pages
   ┗ Search.tsx
 ┣ 📁 recoil
   ┗ cache.ts
 ┣ 📁 service
   ┣ SearchService.ts
   ┗ interceptor.ts
 ┣ 📂 styles
   ┣ GlobalStyle.tsx
   ┗ common.ts
 ┣ 📂 types
   ┣ hooks.ts
   ┣ pages.ts
   ┣ service.ts
   ┗ style.ts
 ┣ 📂 utils
   ┗ pages.ts
 ┣ index.tsx
 ┗ router.tsx
```

</div>
</details>

### ⚙️ 구현기능

1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

```
- 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
- 검색어가 없을 시 “검색어 없음” 표출
```

2.  API 호출 최적화

```
- API 호출별로 로컬 캐싱 구현
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
```

3.  키보드만으로 추천 검색어들로 이동 가능하도록 구현

<br/>

### 10팀의 Best Practice 선정 내용

1. 사용자가 입력한 텍스트와 일치하는 부분 볼드처리

   https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/86acab02ad148793478e269f19b8f797fb46837a/src/utils/pages.ts#L1-L13

   - 입력하는 키워드와 일치하는 문자를 `replace`를 사용하여 각 검색 리스트에서 찾는다.
   - 일반 텍스트에서 bold css 적용이 된 `strong`태그가 문자를 감싸주는 것으로 교체한다.

   https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/86acab02ad148793478e269f19b8f797fb46837a/src/pages/Search.tsx#L87-L96

   - dangerouslyInnerHTML을 사용하였기 때문에 XSS공격 위험이 존재한다. 이것을 해결하기 위하여 DOMPurify Santizer를 사용하여 임의의 문자열을 안전하게 삽입하였다.

<br/>

2. Debouncing(디바운싱) 기법

   https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/551c97106cd3cb5dcaa9a3c01a414978b715ec5d/src/hooks/useTextDebounce.ts#L1-L15

   - 키워드가 입력될 때는 timer가 초기화 되며 동작을 멈췄을 때 delay 시간 후에 실행되는 기법이다.
   - delay 시간 후에 마지막 호출만 실행되기 때문에 누를 때마다 실행되지 않게 하면서 API 호출 수를 확실히 줄일 수 있다.

<br/>

3. API 호출별로 로컬 캐싱 구현

https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/d44554c5012262ef0a98dce5d4fc7465a4e461f2/src/hooks/useGetLocalStorageFuncs.ts#L4-L19

- localStorage에 저장된 값을 얻거나 값을 저장하기 위한 함수들을 작성한 훅이다. 팀원들과 얘기할 때 localStorage, sessionStorage, indexedDB, cache Storage 같은 여러 저장소가 있는데 어떤 것을 쓸지 고민이었다. 이번 과제에서 현 데이터는 자주 최신으로 업데이트 될 필요가 없는 데이터라고 생각되어 무난한 localStorage를 사용하여 구현하였다.

https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/dbe5931bea59449a75f66ecba12396681b684bb2/src/hooks/useGetCachedSearchResultList.ts#L5-L46

- 검색을 하였을 때 입력한 키워드가 처음 페이지에 들어오거나 유효시간이 만료되어 로컬 스토리지에 존재하지 않으면 검색 api를 호출한다.

<br/>

4. 키보드 방향키 이동하여 리스트 이동 효과

   https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/551c97106cd3cb5dcaa9a3c01a414978b715ec5d/src/hooks/useMoveUpAndDown.ts#L20-L36

   - 키보드 이벤트 발생시 Up, Down 키 입력에 따라 +1, -1하여 현재의 인덱스 위치를 상태값으로 저장하여 구현하였다.
   - 가장 위인지 가장 아래인지 판단하는 조건으로 현재 인덱스 위치에서 계산되지 않도록 구현하여 가장 위거나 아래일 때 무한정 실행되는 현상을 막았다.
   - 화살표 Up, down 키 눌렀을 때 스크롤 이동 기능 구현

<br/>

### 📝 Meeting Log

[회의록 바로가기](https://www.notion.so/Meeting-log-3eff6566fd844052b7a98702ebab8c5b?p=e937bd849c4b48979a50c88ebc87efc4&pm=s)
