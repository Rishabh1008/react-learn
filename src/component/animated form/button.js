import React from "react";
function MyButton() {
  const barOuter = document.querySelector(".bar-outer");
  const options = document.querySelectorAll(".bar-grey .option");
  let current = 1;
  options.forEach((option, i) => (option.index = i + 1));
  options.forEach((option) =>
    option.addEventListener("click", function() {
      barOuter.className = "bar-outer";
      barOuter.classList.add(`pos${option.index}`);
      if (option.index > current) {
        barOuter.classList.add("right");
      } else if (option.index < current) {
        barOuter.classList.add("left");
      }
      current = option.index;
    })
  );
  return (
    <div class="container">
      <div class="bar bar-grey">
        <div class="option">ONE</div>
        <div class="option">TWO</div>
        <div class="option">THREE</div>
      </div>
      <div class="bar-outer">
        <div class="bar bar-purple">
          <div class="option">ONE</div>
          <div class="option">TWO</div>
          <div class="option">THREE</div>
        </div>
      </div>
    </div>
  );
}
export default MyButton;
