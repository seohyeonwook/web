main();

function main() {
    let result = [];

    new Promise((resolve,reject) => {
        setTimeout(() => resolve(1), 3000)
    });

    new Promise((resolve,reject) => {
        setTimeout(() => resolve(2), 2000)
    });

    new Promise((resolve,reject) => {
        setTimeout(() => resolve(3), 1000)
    });

    
}