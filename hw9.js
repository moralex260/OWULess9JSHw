console.log("go")
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
                resolve(s="встаю встаю");

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

            else if(i>4){reject(s="проспав,буду далі спати,не будити")}




        },2000)
    })

}

function hygieneProcedures() {

    return new Promise((resolve) => {
            setTimeout(()=> {

                resolve(s="помився,побрився....")


            },2000)
        }

    )}
function morningWorkOut(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("зарядка,раз два три чотири...");

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
                resolve("ням ням...");

            }
            else{console.log("жру наніч ням ням...");
                return sleep()}
        },2000)
    })
}

function learn() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("promice - це...,вчуся");

        },3000)
    })
}
function badVariant() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("зуби не почистив,зарядку не зробив,не поїв, сука, довго спав");

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
            resolve(s="працюю");

        },5000)
    })
}
function getHome() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(s="їду до дому");

        },2000)
    })
}
function doHomeWork() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(s="роблю домашку");

        },3000)
    })
}
let i=0;
function sleep() {
    return new Promise((resolve, reject) =>
        setTimeout(()=> {

            if(!alarmClock()) {

                reject(s="сплю")
            }
            else {console.log("не можу заснути,хочу їсти");
                i++;
                if(i<3){
                    return getEat()
                }
                else {resolve(s='обожрался сплю')}
            }

        },3000)


    )}



wakeUp(alarmClock())
    .then ((s)=>{console.log(s);return hygieneProcedures()})
    .then((s)=>{ console.log(s);return morningWorkOut()})
    .then((s)=>{console.log(s);return getEat()})
    .then((s)=>{console.log(s);return learn()})
    .then((s)=>{console.log(s);return getToWork()})
    .then((s)=>{console.log(s);return work()})
    .then((s)=>{console.log(s);return getHome()})
    .then((s)=>{console.log(s);return doHomeWork()})
    .then((s)=>{console.log(s);return sleep()})
    .then((s)=>{console.log(s)})
    .catch(reason => console.log(reason));



//  badVariant()
//          .then(()=>{return getToWork()})
// .then(()=>{return work()})
// .then(()=>{return getHome()})
// .then(()=>{return doHomeWork()})
//          .then(()=>{return sleep()})
// .catch(reason => console.log(reason));
