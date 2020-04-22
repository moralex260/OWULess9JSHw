function alarmClock() {
    let a=Math.round(Math.random());
    return a !== 0;
}

let count=0;

function wakeUp(a,i=0) {

    return new Promise((resolve, reject) =>

    {
        setTimeout(()=>{

            if(a){
                resolve(console.log("встаю встаю"));

            }
            else if(i<=2){
                i++;
                count++;

                console.log("посплю ще трохи");
                resolve (wakeUp(alarmClock(),i))
            }

            else if(count===3){

                resolve(badVariant())
            }

            else if(i>4){reject("проспав,буду далі спати,не будити")}




        },2000)
    })

}

function hygieneProcedures() {

    return new Promise((resolve) => {
            setTimeout(()=> {

                resolve(console.log("помився,побрився...."))


            },2000)
        }

    )}
function morningWorkOut(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(console.log("зарядка,раз два три чотири..."));

        },2000)
    })
}
let j=0;
function getEat() {
    j++;
    console.log("j",j);
    return new Promise((resolve) => {
        setTimeout(()=>{
            if(j<=1) {
                resolve(console.log("ням ням..."));

            }
            else{console.log("жру наніч ням ням...");
                return sleep()}
        },2000)
    })
}

function learn() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(console.log("promice - це...,вчуся"));

        },3000)
    })
}
function badVariant() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(console.log("зуби не почистив,зарядку не зробив,не поїв, сука, довго спав"));

        },2000)
    })


}
function getToWork() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(alarmClock()) {
                resolve("їду на роботу");
            }
            else{reject("їду на роботу....автобус поломався...йду додому пішки")}
        },2000)
    })
}
function work() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(console.log("працюю"));

        },5000)
    })
}
function getHome() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(console.log("їду до дому"));

        },2000)
    })
}
function doHomeWork() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(console.log("роблю домашку"));

        },3000)
    })
}
let i=0;
function sleep() {
    return new Promise((resolve, reject) =>
        setTimeout(()=> {

            if(!alarmClock()) {

                reject("сплю")
            }
            else {console.log("не можу заснути,хочу їсти");
                i++;
                if(i<3){
                    return getEat()
                }
                else {resolve(console.log('обожрался сплю'))}
            }

        },3000)


    )}



wakeUp(alarmClock())



    .then (()=>{return hygieneProcedures()})
    .then(()=>{ return morningWorkOut()})
    .then(()=>{return getEat()})
    .then(()=>{return learn()})
    .then(()=>{return getToWork()})
    .then(()=>{return work()})
    .then(()=>{return getHome()})
    .then(()=>{return doHomeWork()})
    .then(()=>{return sleep()})
    .catch(reason => console.log(reason));



//  badVariant()
//          .then(()=>{return getToWork()})
// .then(()=>{return work()})
// .then(()=>{return getHome()})
// .then(()=>{return doHomeWork()})
//          .then(()=>{return sleep()})
// .catch(reason => console.log(reason));


