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

   replace를 사용하요 해당 텍스트의 strong 태그 입력

   https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/86acab02ad148793478e269f19b8f797fb46837a/src/pages/Search.tsx#L87-L96

   XSS공격 방지를 위해 DOMPurify 사용

<br/>

2. API 호출별로 로컬 캐싱 구현

<br/>

3. 디바운싱

   https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/551c97106cd3cb5dcaa9a3c01a414978b715ec5d/src/hooks/useTextDebounce.ts#L1-L15

<br/>

4. 키보드 방향키 이동하여 리스트 이동 효과

   https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-1-10/blob/551c97106cd3cb5dcaa9a3c01a414978b715ec5d/src/hooks/useMoveUpAndDown.ts#L20-L36

   키보드 이벤트 발생시 index 값을 +혹은 - 로 값을 변경하여 글의 index 와 대조하여 Hover 효과 구현

<br/>

### 📝 Meeting Log

[회의록 바로가기](https://www.notion.so/Meeting-log-3eff6566fd844052b7a98702ebab8c5b?p=e937bd849c4b48979a50c88ebc87efc4&pm=s)
