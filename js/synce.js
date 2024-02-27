main();

function main() {
    p1(3,"data1").then(result => console.log(result));
}
function p1(time, data) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            }, time * 1000);
    });    
}