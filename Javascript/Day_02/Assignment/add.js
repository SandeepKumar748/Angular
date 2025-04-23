let a = prompt(`Enter value a`)
document.getElementById('a').innerText = a;
if(a){
    let b = prompt(`Enter value b`)
    document.getElementById('b').innerText = b;
    if(b){
        let result = Number(a) + Number(b);
        document.getElementById('result').innerText = result;
    }
}
