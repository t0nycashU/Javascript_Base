

var event, ok, lookAnswer;
var arrAnswers = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        if (ok) {
            if (event == 1) {
                arrAnswers.push(works.a1);
            } else {
                arrAnswers.push(works.a2)
            }
        }
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                if (ok) {
                    if (event == 1) {
                        arrAnswers.push(works.b1);
                    } else {
                        arrAnswers.push(works.b2);
                    }
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                arrAnswers.push(works.d1);
                            } else {
                                arrAnswers.push(works.d2);
                            }
                        }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                arrAnswers.push(works.d1);
                            } else {
                                arrAnswers.push(works.d2);
                            }
                        }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                if (ok) {
                    if (event == 1) {
                        arrAnswers.push(works.c1);
                    } else {
                        arrAnswers.push(works.c2);
                    }
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                arrAnswers.push(works.d1);
                            } else {
                                arrAnswers.push(works.d2);
                            }
                        }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                arrAnswers.push(works.d1);
                            } else {
                                arrAnswers.push(works.d2);
                            }
                        }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

do {
    lookAnswer = +prompt("Чтобы посмотреть ответы на вопросы введите 1 или 0 чтобы закончить");
    if (lookAnswer == 1){
        numberQuest = +prompt("Укажите номер интересующего Вас вопроса");
        switch (numberQuest) {
            case 1:
                alert(arrAnswers[0]);
                lookAnswer = 0;
                break;
            case 2:
                alert(arrAnswers[1]);
                lookAnswer = 0;
                break;
            case 3:
                alert(arrAnswers[2]);
                lookAnswer = 0;
                break;
            default:
                break;
        }
    } else {
        alert("Спасибо за игру")
    }
} while (lookAnswer == 1);

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}
