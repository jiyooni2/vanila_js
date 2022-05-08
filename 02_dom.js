/*
DOM : Document Object Model

HTML file을 브라우저에서 읽음
브라우저에서는 각각 tag를 분석해서 이것을 노드로 변환

HTML Tag -> Javascript Node(Object)
Node의 Object 안에는 HTML의 클래스,텍스트 같은 모든 정보들 포함

Node는 EventTarget상속, 모든 Node는 이벤트가 발생할 수 있다
HTML요소들은 element로 변환

HTML -> DOM Tree

HTML tag 하나가 각각 그에 상응하는 DOM tree요소가 있음
(모든 것들이 변환, 주석마저도)

브라우저도 실행되고 있는 어플리케이션, 어플리케이션이 이해할 수 있는, 메모리에
보관할 수 있는 오브젝트로 변환(DOM Tree)

Window : DOM, BOM, JavaScript


Node : any DOM object
Element : specific node that can be directly specified in the HTML tag
Document : has the html node as its child

EventTarget(Node는 EventTarget이기 때문에, 사용 가능했던 것)
    addEventListener
    removedEventListener
    dispatchEvent : 특별한 이벤트 발행


CSSOM(CSS Object Model)
    CSS(external, embedded, inline, user-agent stylesheet) -> CSSOM
    CSSOM
        Cascading rules에 따라서 정의된 모든 style(computed style)
        우리가 정의한 css file 뿐만 아니라, 브라우저 설정 등등 모두 반영
    html에서 font 14로 지정하면, 그 아래 모두(body, section...) font 14로 지정됨

    Rendering Tree = DOM + CSSOM
        HTML head부분이나 display=None이라고 설정되어있으면 사용자에게 보여지지 않음
        최종 Render Tree에 포함 안됨
        Render Tree에는 사용자에게 보여지는 부분만 포함
        투명도 0은 포함되지만, display=None은 포함 안됨

Critical Rendering Path
    request/response->loading->scripting->rendering->layout->painting
    
    request
        브라우저가 서버에게 HTML파일 요청하고 서버는 response
    loading
        받아옴
    scripting
        HTML을 한줄씩 읽어서 DOM 요소로 변환
        CSS요소를 받아서 CSSOM으로 변환
    rendering
        rendering tree 만듬
    layout
        Render Tree를 이용해서 x,y 너비 높이 이용해서 크기 계산(layout)
        각 요소들이 어떤 위치에 얼마나 크게 표기될 것인지 계산
        브라우저 resize된다면, layout다시 설정되겠죠
    painting

    layout해서 어떻게 배치했냐에 따라서 각각 부분을 잘게잘게 나누어서
    이미지를 준비해둠(bitmap)

    Render Object의 속성에 따라 필요한 경우 Render Layer가 만들어짐
    Render Layer중에서 GPU에서 처리되는 부분이 있다면 Graphic Layer로 분리    
    만약, Render Layer가 2개 이상이라면, 각각의 Layer print한 뒤
    하나의 이미지로 Composite
    레이어가 변화되면, 그 레이어만 수정하면 되기때문에 이렇게 함(포토샵 원리)

    CSS의 will-change : 이 요소는 변화될지도 몰라 -> 새로운 layer에 그려줌
    너무 많은 layer가 존재해도 성능이 저하

    composition은 순차대로 준비한 layer를 차곡차곡 올려둠
    (layer의 순서를 z-index 사용해서...)

    DOM -> RenderTree
        빠르게 하는법?
        최대한 요소를 작게 만듬
        불필요한 태그를 줄이기(쓸데없는 랩핑 줄이기)
        
    Operation
        paint가 자주 일어나지 않도록 만듬
        어떤 박스를 움직이는데, 그 주변도 다 움직여야 한다면 layout부터 다시..
        어떤 박스 하나만 움직이면 composition만 다시 일어나겠지
        animation 실행 시 layout을 다시 일어나게 한다면 정말 최악의 경우
    
Chrome More tools -> Layers
    Browser가 만든 layer 볼 수 있음
    will-change : opacity > opacity가 변경될 수 있음

애니메이션 transition을 사용할 때 어떤 속성값을 쓰느냐에 따라, paint, layout, composition만
발생할 수 있음

Blink : Chrome Engine(V8),최신 Edge
Gecko : FireFox
Webkit : IOS, Safari
EdgeHTML : 예전 Edge

주기적으로 업데이트 될 때 composition, paint정도만 일어난다며 너무 좋음
layout까지 일어나면 worst case

Performance
    F12 개발자툴
    ctrl+shift+p : layout 볼 수 있음
    빨간색 : layout shift
    초록색 : layout X    
60Frame/second
1frame보여질때, 16.67ms 보여주어야 이상적
16이 넘어가는 순간, 화면이 깜빡거린다, 이상하다는 느낌이 듬
interaction이 많을수록, 성능 높아야 좋음


DOM 요소 조작
    

*/
