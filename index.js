let dice = document.querySelector("#dice");
const renderAdvice = async (id) => {
    let uri = 'https://api.adviceslip.com/advice/' + id;

    const res = await fetch(uri);
    const advices = await res.json();

    let myId = advices.slip.id;
    let advice = advices.slip.advice;
    document.querySelector("blockquote").innerHTML = `"${advice}"`;
    document.querySelector("small").innerHTML = `ADVICE #${myId}`;
}
dice.addEventListener("click", function(){
    let id = Math.floor(Math.random() * 200);
    renderAdvice(id)
})
