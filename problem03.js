function multiplicationTable(number) {
    console.log('Multiplication Table for ' + number + ':');
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}
multiplicationTable(5)