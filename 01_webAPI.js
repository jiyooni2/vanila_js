/*
APIs
    Application Programming Interfaces
    자판기 내부의 logic들 몰라도, 그냥 버튼 사용

External APIs
    ex) Windows제공 API이용하면 간단하게 Window Application 만들 수 있음
    Youtube API사용해서 Youtube 데이터 받아오는 등등

My APIs
    내가 만드는 프로젝트에서 login,logout API있는 것
    어떻게 로그인/로그아웃 로직이 작성되어있는지 볼 필요 없이 기능 사용

Web APIs
    DOM(Document Object Model) APIs : 웹페이지에 있는 요소 생성/삭제, 스타일 변경
    Network APIs : 서버와 통신 기능
    Graphic APIs
    Audio/Video APIs
    Device APIs : device 상태정보(online 등)
    File APIs
    Storage APIs
    MDN에서 어떤것들이 있구나...만 생각하면 됨(사용법을 외울 필요는 없음)

Web APIs => need to be secure
    보안 요구성 높음
    특정(민감정보) API는 https에서만 동작함
    HTTPS : HTTP + Secure
    server-client 통신시 encryption(보안 처리)
    
Window Object
    브라우저에서 웹페이지를 열게 되면, Window라는 전체적인 오브젝트 존재
    Window : 브라우저에서 현재 열려있는 전체적인 창 의미(DOM 문서를 담은 창)
    Window 내부에 페이지가 표기되는 부분이 Document Object(Window자식)
    브라우저 자체에 관련된 정보들이 담겨있는 Navigator Object(Window자식)

DOM(Document Object Model)
    새로운 요소 추가/제거/이동

BOM(Browser Object Model)
    Web APIs와 관련된 object 들어있음
    브라우저 위에서 동작하는 것을 만들때는 Window Object, DOM, BOM api 사용가능


    웹페이지에서 this = global object = Window
    window.alert() = this.alert() = alert()

Windows API : size, scroll, load and so on..
    window.screen : 모니터의 해상도, 모니터 사이즈(브라우저바깥 포함)
    window.outer : 브라우저의 사이즈
    window.inner : 페이지가 표기되는 부분 전체(스크롤바 포함)
    documentElement.clientWidth : 순수 document(스크롤바 있다면 제외)

Browser Coordinates
    제일 왼쪽 위가 0,0 오른쪽 X축 아래쪽 Y축
    Element.getBoundingClientRect() : 요소의 위치,사이즈 정보 알 수 있음
    (height,width, left(=y좌표), top(=x좌표),right, bottom)
    DOM의 모든 요소들은 다 Element obj
    CSS에서와 getBoundingClientRect()와 bottom/right는 다르니 차이 유의
    Client x,y : click event object가 event listener에 전달
    event에는 client x,y 들어있음, 브라우저에서 x,y좌표
    Page x,y : 페이지 자체에서의 x,y 좌표

Scroll API
    특정px만큼 scroll 하는 API, 특정 element로 이동하는 API
  

Windows Load
    브라우저에서 HTML파일을 먼저 읽은 다음에 그에 관련된 이미지나 
    폰트나 필요한 리소스가 있다면 함께 다운 js파일이 있다면 js file도 다운

    브라우저가 HTML 파일을 열면, 읽어서 DOM요소로 변환
    script만나면 실행 

*/
