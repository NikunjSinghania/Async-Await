async function foo() {
    console.log('--1--')
    const data_1 = await fetch('https://api.publicapis.org/entries')
    const data_1_res = await data_1.json()
    console.log(data_1_res)
    console.log('--2--')
}
foo()