async function generateAdvice() {
  const request = await fetch("https://api.adviceslip.com/advice", {
  method: "GET"})
  const adviceObject = await request.json()

  document.getElementById('adviceNumber').innerHTML = `${adviceObject.slip.id}`
  document.getElementById('advice').innerHTML = `"${adviceObject.slip.advice}"`
 }

document.querySelector('.hero__btn').addEventListener('click', () => generateAdvice())