import multiply from './asyncMultiply'
async function demo () {
    let x = multiply(3,4);
    console.log("Without await: 3 * 4 = ",x);

    x = await multiply(3,4);
    console.log("With await: ",x);

}