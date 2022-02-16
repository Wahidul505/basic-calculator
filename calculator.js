function getOutput() {
  const output = document.getElementById('output');
  return output;
}
const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    const output = getOutput();
    const previousOutput = output.innerText;
    output.innerText = previousOutput + event.target.innerText;
  })
}

document.getElementById('clear').addEventListener('click', function () {
  const output = getOutput();
  output.innerText = '';
})
document.getElementById('=').addEventListener('click', function () {
  const output = getOutput();
  const outputValue = output.innerText;
  output.innerText = eval(outputValue);
})