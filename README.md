***
## 프로젝트 소개
***
<br>
<center>
<img src="https://user-images.githubusercontent.com/75672249/117419208-48016a80-af57-11eb-9b4d-e85deec186a3.png" width="300px" />
</center>
<br>
박스마켓은 "기존 중고 거래 사이트에 직거래 장소를 지도로 표시할 수 있는 기능이 있으면 어떨까?" 라는 생각에서 출발하였습니다.

***
## 사용 기술 스택
***
- 프론트엔드  

  ![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- 백엔드  

  ![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
  
- 데이터베이스

  ![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)  
- 파일 업로드
  
  ![aws](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
- 배포 환경

  ![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
***
## 프로젝트 기능
***
### 반응형  
![박스마켓_반응형](https://user-images.githubusercontent.com/75672249/117530744-d9391580-b019-11eb-98d2-66e691cc5f61.gif)
- 미디어 쿼리를 이용해 모바일과 데스크탑 버전 구분
### 회원가입 / 로그인
![박스마켓_로그인_회원가입](https://user-images.githubusercontent.com/75672249/117530746-da6a4280-b019-11eb-8aac-e9434d296e94.gif)
- passport.js 미들웨어를 사용하여 로그인 구현
- 쿠키와 세션 방식으로 로컬 로그인 구현
- OAuth2.0 방식으로 소셜 로그인 구현
### 프로필 수정
![박스마켓_프로필](https://user-images.githubusercontent.com/75672249/117532109-de4d9300-b020-11eb-9425-c9747fc58f1c.gif)
- multer S3 미들웨어를 이용하여 aws에 프로필 사진 업로드
- 프로필 사진 변경 시 S3에 저장된 사진 삭제
### 포스트 업로드
![박스마켓_업로드](https://user-images.githubusercontent.com/75672249/117532289-a72bb180-b021-11eb-8fda-55b9a091321c.gif)
- multer S3 미들웨어를 이용하여 사진 파일 업로드
- 이미지 슬라이드 구현
- 카카오 맵 API를 이용한 직거래 장소 공유
### 검색
![박스마켓_검색](https://user-images.githubusercontent.com/75672249/117532338-012c7700-b022-11eb-9f11-96b5d598fbbe.gif)
- URL로 넘어오는 파라미터를 이용한 검색 기능
***
## 프로젝트 구조
***