변수(variable)는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 금 ㅔ모리 공간을 식별하기 위해 붙인 이름을 말함

식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말함
 => 식별자는 값이 아니라 메모리 주소를 기억

변수를 사용하려면 반드시 선언이 필요함. 변수를 선언할 때는 var, let, const 키워드를 사용

변수 선언은 소스코드가 한 줄씩 순차적으로 실행되는 시점, 즉 런타임이 아니라 그 이전 단계에서 먼저 실행됨. 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 호이스팅이라 함

변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행 => hoisting.js 참고

재할당이란 이미 값이 할당되어 있는 변수에 새로운 값을 또다시 할당하는 것을 말함
 => 만약 값을 재할당 할 수 없어서 변수에 저장된 값을 변경할 수 없다면 변수가 아닌 상수(constant)라 함

식별자 네이밍 규칙
 1. 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있음
 2. 단, 식별자는 특수문자를 제외한 문자. 언더스코어(_), 달러 기호($)로 시작해야 함. 숫자로 시작하는 것은 허용하지 않음
 3. 예약어는 식별자로 사용할 수 없음
  => 자바스크립트 예약어 : await break case catch clss const continue debugger default delete do else enum export extends false finally for function if implements import in instanceof interface let new null package private protected public return super static switch this throw true try typeof var void while with yield

네이밍 컨벤션은 하나 이상의 영어 단어로 구성된 식별자를 만들 때 가독성 좋게 단어를 한눈에 구분하기 위해 규정한 명명 규칙
 1. camelCase => var firstName;
 2. snake_case => var first_name;
 3. PascalCase => var FirstName;
 4. typeHungarianCase => var strFirstName; (type + identifier)
                      => var $elem = document.getElementById('myId'); (DOM노드)
                      => var observable$ = fromEvent(document, 'click'); (RxJS옵져버블)