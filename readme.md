# juju prototype

팀이름 : 주주

팀원 : 심원주, 정진주

📌**개발 내용 요약**

최근 COVID-19로 인해 언택트와 관련한 커뮤니티와 플랫폼 사업의 규모가 커지는 중에 운동을 대표할 만한 커뮤니티를 찾기 어려워 이에 서비스 필요성을 느끼고 개발을 시작했다.

크게 **커뮤니티**와 **헬스장 통합 리뷰 조회**로 구성된다. 커뮤니티의 초기유저를 위해 헬스장 통합 리뷰를 제공한다. 검색어 리스트로 상호명과 소재지를 파악한 후 **한줄평과 별점을 크롤링**했다. 크롤링한 결과를 **지도 api**를 사용해서 마커를 누르면 해당 시설의 종합적인 리뷰를 조회할 수 있다.


📌**사용된 기술**

- 리액트를 활용한 웹사이트 개발
- 파이썬 라이브러리를 이용한 리뷰 크롤링
- 네이버 지도 api 이용

📌**개발 스케줄(7일)**

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled.png)

📌**서비스 필요성 제기**

최근 COVID-19로 인해 언택트와 관련한 커뮤니티와 플랫폼 사업의 규모가 커지고 있다. 주주팀은 평소 운동에 관심이 많아 운동 커뮤니티를 개발하기로 결정했다. 현존하는 서비스를 찾아본 결과, 대부분 자사 제품을 팔기 위한 쇼핑몰 기반의 운동 커뮤니티가 많았다. 커뮤니티가 주된 기능이 아니었고, 운동을 대표할 만한 커뮤니티를 찾기 어려웠으므로 이에 서비스 필요성을 느끼고 개발을 시작했다.

📌 **관련 시장 현황**

몬스터짐의 경우 유명한 운동 커뮤니티임에도 불구하고 하루 글이 한페이지가 채 되지 않았다. 다신의 경우 몬스터짐보다 활성화되어 있었으나 이는 쇼핑몰의 포인트 제도를 위함이었고 정보를 공유하는 모습은 찾기 어려웠다.

그 외 운동 커뮤니티는 디시인사이드 헬스갤러리, 뽐뿌, 네이버/다음 카페 등 대형 커뮤니티의 부속이 대부분이었다.

이후 소개하게 될 서비스에서 언급하겠지만 주주팀은 운동 커뮤니티에 사람이 모이게 하기 위해 헬스장 찾기 서비스를 도입한다. 마찬가지로 헬스장 찾기 서비스도 조사했다. 주로 어플리케이션에 서비스가 많았으며 필드쉐어, 다짐, 운동닥터, 니짐내짐, 헬씨짐, 애브리핏 등이 있었다. 이중엔 10만 다운로드가 넘은 어플리케이션도 많았다.

📌 **서비스 소개(비즈니스 모델)**

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/juju_prototype__.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/juju_prototype__.png)

크게 커뮤니티와 헬스장 통합 리뷰 조회로 구성된다. (실제 개발에서 커뮤니티 기능은 생략되었다. )커뮤니티 수익모델에 있어 초기유저는 필수적이다. 주주팀은 이를 위해 헬스장 통합 리뷰를 제공한다.

 검색어 리스트로 상호명과 소재지를 파악한 후 한줄평과 별점을 크롤링했다. (기존 목표는 공공 데이터 포털에서 검증된 인천 미추홀구 지역 체육시설의 리뷰를 크롤링하는 것이었으나 검증된 체육시설이어도 지도 어플리케이션에 직접 등록을 하지 않으면 해당 정보를 조회할 수 없다는 점, 서비스 개발 후 시연 결과 리뷰를 작성하는 주 사용자층과 미추홀구 체육시설 이용자층이 일치하지 않았던 점을 반영해 수정했다.) 크롤링한 결과를 데이터베이스에 저장하여 연동해 지도 api를 사용해서 해당 위치에 마크한 동시에 마커를 누르면 종합적인 리뷰를 조회할 수 있다.

📌 **기존 모델과의 차별성**

앞에서 상업적인 용도에 기반한 커뮤니티는 크게 활성화되지 않았음을 언급했습니다.

헬스장 이용 어플리케이션의 경우에서 대표적으로 다짐은 미리 협력을 맺은 제휴업체와의 할인 이벤트로 이용자를 모아 제휴비용, 부가 서비스 결제 비용 등으로 수익을 올리는 구조였다. 제휴 시설을 기반으로 헬스장의 위치를 파악할 수 있었던 만큼 주변의 헬스장을 조회했을 때 모든 헬스장을 조회할 수가 없었고 사이트에서 조회한 리뷰에도 신뢰도 문제가 갔다.

📌 **개발 내용 및 결과**

1. **웹사이트 계정 관련[[i]]()**

   - **회원가입 기능**

     클라이언트는 서버로 BodyParser를 통해 Request를 보냄

     register route를 생성하고 node 서버를 실행한 후 route에 request를 보냄

   - **비밀번호 암호화 기능**

     npm bcrypt 라이브러리로 비밀번호 암호화

     비밀번호를 암호화하여 데이터베이스에 저장함

     server/models/User.js에서 유저정보를 저장하기 전에 userSchema를 만듬

     salt를 만들고, 이를 이용해서 비밀번호를 암호화함

     userSchema.pre함수에서 bcrypt를 사용함

   ![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%201.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%201.png)

   *Figure 1계정 생성 및 비밀번호 암호화*

   - **로그인 기능**

     데이터베이스에서 요청한 이메일을 찾고, 요청한 이메일이 있다면 비밀번호가 같은지 확인.

     비밀번호가 같다면 토큰을 생성함. jsonwebtoken을 사용.

     ![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%202.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%202.png)

     *Figure 2로그인되어 토큰이 생성됨*

   - **로그아웃 기능**

   logout route를 생성하고 로그아웃하려는 계정을 데이터베이스에 찾아서 토큰을 지움.

   ![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%203.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%203.png)

   *Figure 3로그아웃하여 토큰이 제거됨*

**

**2. 카카오맵 리뷰 크롤링[[ii]]()**

- 카카오맵 리뷰 추출: 파이썬 BeautifulSoup, 셀레니움 라이브러리 이용

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%204.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%204.png)

- 결과를 json파일로 저장

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%205.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%205.png)

*추출된 리뷰는 데이터베이스에 저장되었습니다*

- 추출된 리뷰 예시

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%206.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%206.png)

**3. 네이버 지도 api 사용[[iii]]()**

- 네이버 클라우드 플랫폼에서 네이버 지도 상품을 신청하고 클라이언트 키를 받음

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%207.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%207.png)

- npm react-naver-maps 설치

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%208.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%208.png)

- 지도 컴포넌트 생성 및 소스 수정

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%209.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%209.png)

- 위도, 경도 및 마커 설정

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2010.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2010.png)

- 마커를 누르면 크롤링한 리뷰가 뜸

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2011.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2011.png)

**4. 화면 구성**

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2012.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2012.png)

**5. 소스디렉터리**

![juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2013.png](juju%20prototype%20635101d53ed24dbcbfd45f61259c9d5a/Untitled%2013.png)

개발 결과는 함께 첨부한 동영상에서 확인해주시길 바랍니다.

[[i]]() 참고한 자료  :

[https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8)

[[ii]]() [https://github.com/wlgh325/python_crawling](https://github.com/wlgh325/python_crawling)

[https://soyoung-new-challenge.tistory.com/20](https://soyoung-new-challenge.tistory.com/20)

[[iii]]() 참고한 사이트  :[React Naver Maps Style Guide] [https://zeakd.github.io/react-naver-maps/](https://zeakd.github.io/react-naver-maps/)

📌 **기술 개발 결과 활용 계획**

이번 프로토타입에서는 카카오맵의 한 줄 리뷰와 별점만 크롤링했다. 네이버지도나 구글맵에서도 카카오맵과 마찬가지로 한 줄 리뷰를 볼 수 있고 나아가 블로그리뷰와 방문자리뷰도 구분해서 조회할 수 있다. 운동시설에 대한 리뷰 자체가 음식점이나 타 시설에 비해 부족하지만 여러 웹의 리뷰를 함께 크롤링해 웹사이트에서 조회할 수 있다면 많은 데이터만큼 서비스에 대해 신뢰가 생길 것이다. 블로그 리뷰도 수집해서 링크를 첨부하는 식으로 제공한다면 보기 편할 뿐 아니라 광고여부를 사용자가 판단할 수 있어 효과가 기대된다.

크롤러 최적화를 비롯해 결과를 텍스트 마이닝에 활용한다면 시각화에 용이해 이용자를 확보하기 쉬워질 것이다. 또한 텍스트 마이닝의 결과로 위치, 사용자의 취향에 기반해 개개인의 사용자를 위한 헬스장 추천 시스템을 만들 수도 있다.

비정형데이터 분석의 수요가 꾸준히 증가하는 만큼, 웹에서 원하는 데이터를 효율적으로 탐색하고 수집하는 크롤링의 활용도 계속 이어질 것이다.

**📌 각 팀원 역할**

심원주: 크롤링, 보고서 작성 및 문서화                      (40%)

정진주: 웹 개발, 크롤링 결과 활용해 지도에 마킹                  (60%)
