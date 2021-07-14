const colors = ["green", "purple", "rgba(133,122,200)", "#f15025","#D3D3D3","#FFFACD","#00CED1","#FFF5EE"," #7CFC00","#778899"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
};