const solution = food => {
    let temp = "";
    for(let i = 1 ; i<food.length; i++){
        //절반에 해당하는 만큼 문자열을 생성한다. ( 앞부분 문자열 )
        temp+= `${i}`.repeat(food[i]/2);
    }
    //리턴할때 reverse()를 통해 문자열을 뒤집은 부분을 추가하여 처리한다.
    return temp+0+[...temp].reverse().join("");
}
