//전달받은 인수가 Falsy값이면 true, Truthy값이면 false반환
function isFalsy(v){
    return !v;
}

//전달받은 인수가 Truthy값이면 true, Falsy값이면 false반환
function isTruthy(v){
    return !!v;
}

//모두 true를 반환
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy({});
