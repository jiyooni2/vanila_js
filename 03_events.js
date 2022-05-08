/*
What is Event?
EventHandling point

event type
    mouse click
    keyboard
    resize
    close
    page loading
    form submission
    video is being played
    error
    network
    focus
    websocket
    session history
    css animation
    clipboard
    and so on...

Event Handler 
    Event 발생(Event obj 있음)하면, event object 생성해서 등록한 callback에 전달
    모든 EventTarget에 등록 가능
    addEventListener(event,callback)
    removeEventListener(event,callback)
    dispatchEventListener(event(obj))

Event 처리시, Capturing -> 요소 찾은뒤 eventHandler callback 실행 -> Bubbling
Capturing/Bubbling
    Capturing
        부모 컨테이너부터 시작해서 자식 컨테이너까지 capturing을 통해서 내려옴
        Capturing 단계에서는 무언가를 하는 일은 거의 없음
    Bubbling(up)
        상위 부모의 event handler들 호출
    
    event.stopPropagation() : event 전달 막음
    event.stopImmediatePropagation()
        등록 순서에 따라, 자신보다 늦게 등록된 이벤트는 실행 불가
        +Bubbling도 막음
    But, Event.stopPropagation : 가능하면 사용하지 말기
        다른 부분에서 의미 있는 행동할 수 있음
        부모에서, if(event.target===event.currentTarget)으로 처리

Browser
    event.preventDefault();
    브라우저에서 발생하는 기본적인 행동을 취소
    form제출한다음에 browser 새로고침 되는거 취소 하는 것 등등
    active listener인 경우, callback 기다린 이후 browser가 처리함.
    브라우저가 무엇을 처리하는지 생각해보고 쓰자
    
passive vs active Listener
    passive인 경우 preventDefault() 실행 불가
    passive가 default true로 설정된 event들 같은 경우에는 preventDefault()
    호출 안하는게 좋음
    passive(ex, wheel, scrolling)
        빠르게 무언가를 처리해야하는 경우에 callback을 기다릴만한 시간이 없음
        callback을 기다리지 않고 그냥 자기 할일 먼저 함
    active
        callback함수를 기다려준 뒤에 브라우저가 자신의 일을 함

Event Delegation
    Bubbling
        부모컨테이너는 어떤 자식요소에서 이벤트가 발생하든 다 들을 수 있음
    자식의 요소에 다 등록할게 아니라 부모에 한 번만 등록하는 게 좋음
    1000개의 자식에 이벤트리스너를 다 등록하기보단, 공통적인것은 부모에 한번만 추가


*/
