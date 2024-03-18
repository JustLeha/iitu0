const inputANode = document.querySelector('.a');
const inputBNode = document.querySelector('.b');
const btnNode = document.querySelector('.btn');
const outputNode = document.querySelector('.output');
const selectNode = document.querySelector('.select');

btnNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectNode.value;

    const result = calculate({
        a,
        b,
        operation
    });
    console.log(result);
    outputNode.innerHTML = result;
});
