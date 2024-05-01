// scrolling to paribahan ticket cost calculation
function scrollToSection(id) {
   const section = document.getElementById(id);
   if (section) {
      window.scrollTo({
         top: section.offsetTop,
         behavior: "smooth",
      });
   }
}
// selection of seat button
const allSeatButtons = document.getElementsByClassName("kbd");
// set value of count variable as zero
let count = 0;
for (let singleSeatButton of allSeatButtons) {
   // cursor pointer on each seat element
   singleSeatButton.classList.add("cursor-pointer");
   singleSeatButton.addEventListener("click", function (event) {
      // update value of count variable
      count++;
      event.target.classList.add("selected"); // adding properties on selected button
      //   grabbing seat number and update value
      const seatNumberElement = document.getElementById("seat_number");
      const seatNumber = parseInt(seatNumberElement.innerText);
      seatNumberElement.innerText = count;
      //   grabbing left seat and update value
      const leftSeatElement = document.getElementById("left_seat");
      let leftSeat = parseInt(leftSeatElement.innerText);
      leftSeat = leftSeat - 1;
      leftSeatElement.innerText = leftSeat;
      //   target clicked seat name
      const seatName = event.target.innerText;
      const pricePerSeat = 550;
      // grabbing seat information container, creation and appending of new div as child, p tag a inner html
      const seatInfoMainContainer = document.getElementById(
         "seat_info_main_container"
      );
      const newCreatedImmediateContainer = document.createElement("div");
      newCreatedImmediateContainer.innerHTML = `
        <p class="text-base font-medium">${seatName}</p>
        <p class="text-base font-medium">Economoy</p>
        <p class="text-base font-medium">${pricePerSeat}</p>
      `;
      //   flex justify-between gap-4 md:gap-40 pb-4 border-b-2
      newCreatedImmediateContainer.classList.add(
         "flex",
         "justify-between",
         "gap-4",
         "md:gap-40",
         "pb-4",
         "border-b-2"
      );
      seatInfoMainContainer.appendChild(newCreatedImmediateContainer);
      // apply button active when count is equal to 4
      singleSeatButton.disabled = "true";
      const applyBtn = document.getElementById("apply_btn");
      if (count === 4) {
         applyBtn.removeAttribute("disabled");
      }
      // grabbing input field element
      const passengerName = document.getElementById("passenger_name");
      const passengerPhoneNumber = document.getElementById("passenger_phone");
      const passengerEmail = document.getElementById("passenger_email");
      // next button activation
      const nextButton = document.getElementById("next_btn");
      singleSeatButton = true;
      if (singleSeatButton && passengerPhoneNumber.value.trim() !== "") {
         nextButton.removeAttribute("disabled");
      }
      // total cost calculation
      const totalCostElement = document.getElementById("total_cost");
      let totalCost = parseInt(totalCostElement.innerText);
      totalCost = totalCost + pricePerSeat;
      totalCostElement.innerText = totalCost;
      // coupon code calculation
      const couponNew15Element = document.getElementById("coupon15");
      const couponNew15 = couponNew15Element.innerText;
      const couponCouple20Element = document.getElementById("couple20");
      const couponCouple20 = couponCouple20Element.innerText;
      // input field coupon code
      const fieldCouponElement = document.getElementById("fieldCoupon");
      const fieldCoupon = fieldCouponElement.value.toUpperCase();
      // gran total cost grabbing
      const grandTotalCostElement = document.getElementById("grand_total_cost");
      let grandTotalCost = parseInt(grandTotalCostElement);
      // coupon code check after clicking apply button
      function grandTotalWithCoupon() {
         if (fieldCoupon === couponNew15) {
            const grandTotalCostCoupon15 = totalCost - totalCost * (15 / 100);
            grandTotalCostElement.innerText = grandTotalCostCoupon15;
         } else if (fieldCoupon === couponCouple20) {
            const grandTotalCostCoupon20 = totalCost - totalCost * (20 / 100);
            grandTotalCostElement.innerText = grandTotalCostCoupon20;
         } else {
            grandTotalCostElement.innerText = totalCost;
         }
      }
   });
}
// next button apply
const successSection = document.getElementById("success_section");
const nextButton = document.getElementById("next_btn");
const mainContainer = document.getElementById("main_container");
nextButton.addEventListener("click", function () {
   mainContainer.classList.add("hidden");
   successSection.classList.remove("hidden");
});
// continue button
const continueBtn = document.getElementById("continue_button");
continueBtn.addEventListener("click", function () {
   mainContainer.classList.remove("hidden");
   successSection.classList.add("hidden");
});
