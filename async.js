async function race() {
    
    let runner1 = false;
    let runner2 = false;
    let loser = '';

    
    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, Math.random() * 10000);
    });

    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, Math.random() * 10000);
    });

    
    return [
        await runner1Go,
        await runner2Go,
        loser
    ];
}


race().then((result) => {
    console.log(result[2]); 
}).catch((error) => {
    console.error('Error:', error);
});
