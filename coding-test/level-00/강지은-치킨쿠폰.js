function solution(chicken) {
    let serviceChicken = 0;

    while (chicken > 9) { 
      serviceChicken += parseInt(chicken / 10);
      chicken = parseInt(chicken / 10) + (chicken % 10);
    }

    return serviceChicken
}
