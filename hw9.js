/*Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.

Тобто, як приклад
Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому
- Повчились - Лягли спати.
Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант,
що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
 */
let i=0;
function timeIsRunningOut(a) {
return wakeUp(a)
}

let t=true;
function alarmClock() {
    return Math.round(Math.random())
}
let a=alarmClock();

function wakeUp(a) {
    return new Promise((resolve, reject) =>

    {
        setTimeout(()=>{
            let a=alarmClock();
            console.log(a);
            if(a===1){
                console.log("встаю встаю");
                resolve(hygieneProcedures())
            }
            else{
                reject("проспав");
            }
        },2000)
    })

}

function hygieneProcedures() {

return new Promise((resolve, reject) => {
    setTimeout(()=> {

            console.log("помився,побрився....")
            resolve(morningWorkOut())

    },2000)
}

)}
function morningWorkOut(){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("зарядка,раз два три чотири...");
        resolve(getEat())
    },2000)
})
}
function getEat() {
    i++;
    console.log("i",i);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(i<=1) {
                console.log("ням ням...");
                resolve(learn());
            }
            else{console.log("жру наніч ням ням...");
                resolve(sleep())}
        },2000)
    })
}

function learn() {
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promice - це...,вчуся");
        resolve(getToWork())
    },3000)
})
}
function getToWork() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
          if(a===1) {
            console.log("їду");
            resolve(work())}
          else{reject("автобус поломався")}
        },2000)
    })
}
function work() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("працюю");
            resolve(getHome())
        },5000)
    })
}
function getHome() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("їду до дому");
            resolve(doHomeWork())
        },2000)
    })
}
function doHomeWork() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("роблю домашку");
            resolve(sleep())
        },3000)
    })
}

function sleep() {
return new Promise((resolve, reject) =>
    setTimeout(()=> {
        let a=alarmClock();
        if(a===0) {

           reject("сплю")
        }
        else {console.log("не можу заснути,хочу їсти");
        if(i<4){
            resolve(getEat())
        }
        else {reject('обожрался сплю')}
        }

},3000)


)}
timeIsRunningOut(a)
    .then((a)=>{wakeUp(a)})
.catch(reason => console.log(reason));