const Eggs = document.querySelector(".Eggs");
const Milk = document.querySelector(".Milk");
const Rice = document.querySelector(".Rice");
const Roti = document.querySelector(".Roti");
const Fruits = document.querySelector(".Fruits");
const Vegetables = document.querySelector(".Vegetables");
const Dates = document.querySelector(".Dates");
const Nuts = document.querySelector(".Nuts");
const Others1 = document.querySelector(".Others");
const SalahPrayer = document.querySelector(".Prayer");
const SchoolHomework = document.querySelector(".School-Homework");
const Studies = document.querySelector(".Studies");
const PhysicalActivities = document.querySelector(".Physical-Activity");
const HelpToCleanTheHouse = document.querySelector(".Help-to-clean-the-House");
const Quran = document.querySelector(".Quran");
const Others2 = document.querySelector(".Others2");
const twoEggs = document.querySelector(".twoEggs");
const twoMilk = document.querySelector(".twoMilk");
const twoRice = document.querySelector(".twoRice");
const twoRoti = document.querySelector(".twoRoti");
const twoFruits = document.querySelector(".twoFruits");
const twoVegetables = document.querySelector(".twoVegetables");
const twoDates = document.querySelector(".twoDates");
const twoNuts = document.querySelector(".twoNuts");
const twoOthers1 = document.querySelector(".twoOthers");
const twoSalahPrayer = document.querySelector(".twoPrayer");
const twoSchoolHomework = document.querySelector(".twoSchool-Homework");
const twoStudies = document.querySelector(".twoStudies");
const twoPhysicalActivities = document.querySelector(".twoPhysical-Activity");
const twoHelpToCleanTheHouse = document.querySelector(
  ".twoHelp-to-clean-the-House"
);
const twoQuran = document.querySelector(".twoQuran");
const twoOthers2 = document.querySelector(".twoOthers2");

document.querySelector(".Log-In").addEventListener("click", function () {
  const Email = document.querySelector(".Email").value;
  const password = document.querySelector(".password").value;

  if (Email == "" || password == "") {
    alert("Please fill out all fields.");
  }

  const email = document.querySelector(".Email").value;

  var domain = email.substring(email.length - 4);

  if (domain !== ".com") {
    alert("Enter a correct email");
  }

  if (domain == ".com" && !Email == "" && !password == "") {
    document.querySelector(".Bg-image").style.display = "none";
    document.querySelector(".PPBMT").style.display = "none";
    document.querySelector(".Sign-page").style.display = "none";
    document.querySelector(".mother").style.display = "none";
    document.querySelector(".Select-all").style.display = "block";
    document.querySelector(".Sign-page").style.margin = "0px";
    document.querySelector(".submit1").style.display = "block";
    document.querySelector(".name").style.display = "block";
    document.querySelector(".actual-sign-page").style.display = "none";
    document.querySelector(".points").style.display = "none";
  }
});

document.querySelector(".Sign-Up").addEventListener("click", function () {
  document.querySelector(".Sign-Up").style.display = "none";
  document.querySelector(".Log-In2").style.display = "block";
  document.querySelector(".Log-In2").style.marginLeft = "50px";
  document.querySelector(".Log-In2").style.fontWeight = "bold";
  document.querySelector(".Log-In").textContent = "Sign Up";
});

document.querySelector(".Log-In2").addEventListener("click", function () {
  document.querySelector(".Log-In").textContent = "Sign In";
  document.querySelector(".Log-In2").style.display = "none";
  document.querySelector(".Sign-Up").style.display = "block";
  document.querySelector(".Sign-Up").style.marginTop = "12.7%";
  document.querySelector(".Name").style.display = "none";
  document.querySelector(".Log-In").style.marginTop = "9.5%";
});

document.querySelector(".preview").addEventListener("click", function () {
  document.querySelector(".Table1").style.display = "block";
  document.querySelector(".Table1").style.marginTop = "25px";
  document.querySelector(".points").style.display = "none";
});

const Name = document.querySelector(".name");
let whichTable = 0;

document.querySelector(".submit1").addEventListener("click", function () {
  if (document.querySelector(".name").value == "") {
    alert("Enter Your Child's Name");
  }

  if (!document.querySelector(".name").value == "") {
    whichTable = 1;
    document.querySelector(".NP-Buttons").style.display = "block";
    document.querySelector(".Table1-Heading").style.display = "block";
    document.querySelector(".Table1").style.display = "block";
    document.querySelector(".Table1").style.marginTop = "2px";
    document.querySelector(".preview").style.display = "none";
    document.querySelector(".submit1").style.display = "none";
    document.querySelector(".Select-all").style.display = "none";
    document.querySelector(".name").style.display = "block";
    document.querySelector(".Button1").textContent =
      document.querySelector(".name").value;
    document.querySelector(".Button1").style.display = "block";
    document.querySelector(".Button1").style.width = "160px";
    document.querySelector(".Add-profile").style.display = "block";
    document.querySelector(".name").style.display = "none";
    document.querySelector(".points").style.display = "block";
    document.querySelector(".day-points").style.display = "block";
    document.querySelector(".num-of-points").style.display = "block";
    document.querySelector(".individ-week-points").style.display = "block";
  }
});

document.querySelector(".nextButton").addEventListener("click", function () {
  whichTable = 2;
  document.querySelector(".green2").style.backgroundColor = "#17ff2a";
  document.querySelector(".green1").style.backgroundColor = "transparent";
  document.querySelector(".Table1").style.display = "none";
  document.querySelector(".Table1-2").style.display = "block";
  document.querySelector(".Table1-2").style.marginTop = "2%";
  document.querySelector(".nextButton").style.marginTop = "-26%";
  document.querySelector(".previousButton").style.marginTop = "-23%";
  document.querySelector(".points").style.display = "none";
  document.querySelector(".day-points").style.display = "none";
  document.querySelector(".num-of-points").style.display = "none";
  document.querySelector(".points2").style.display = "block";
  document.querySelector(".day-points2").style.display = "block";
  document.querySelector(".num-of-points2").style.display = "block";
  document.querySelector(".NP-Buttons2").style.display = "block";
  document.querySelector(".NP-Buttons").style.display = "none";
});

document
  .querySelector(".previousButton2")
  .addEventListener("click", function () {
    whichTable = 1;
    document.querySelector(".green1").style.backgroundColor = "#17ff2a";
    document.querySelector(".green2").style.backgroundColor = "transparent";
    document.querySelector(".Table1").style.display = "block";
    document.querySelector(".Table1-2").style.display = "none";
    document.querySelector(".NP-Buttons").style.display = "block";
    document.querySelector(".NP-Buttons2").style.display = "none";
    document.querySelector(".points").style.display = "block";
    document.querySelector(".day-points").style.display = "block";
    document.querySelector(".num-of-points").style.display = "block";
    document.querySelector(".points2").style.display = "none";
    document.querySelector(".day-points2").style.display = "none";
    document.querySelector(".num-of-points2").style.display = "none";
  });

document.querySelector(".nextButton2").addEventListener("click", function () {
  whichTable = 3;
  document.querySelector(".green3").style.backgroundColor = "#17ff2a";
  document.querySelector(".green2").style.backgroundColor = "transparent";
  document.querySelector(".Table1-2").style.display = "none";
  document.querySelector(".Table1-3").style.display = "block";
  document.querySelector(".Table1-3").style.marginTop = "0px";
  document.querySelector(".NP-Buttons3").style.display = "block";
  document.querySelector(".NP-Buttons2").style.display = "none";
  document.querySelector(".points2").style.display = "none";
  document.querySelector(".day-points2").style.display = "none";
  document.querySelector(".num-of-points2").style.display = "none";
  document.querySelector(".points3").style.display = "block";
  document.querySelector(".day-points3").style.display = "block";
  document.querySelector(".num-of-points3").style.display = "block";
});

document
  .querySelector(".previousButton3")
  .addEventListener("click", function () {
    whichTable = 2;
    document.querySelector(".green2").style.backgroundColor = "#17ff2a";
    document.querySelector(".green3").style.backgroundColor = "transparent";
    document.querySelector(".Table1-2").style.display = "block";
    document.querySelector(".Table1-3").style.display = "none";
    document.querySelector(".NP-Buttons2").style.display = "block";
    document.querySelector(".NP-Buttons3").style.display = "none";
    document.querySelector(".points2").style.display = "block";
    document.querySelector(".day-points2").style.display = "block";
    document.querySelector(".num-of-points2").style.display = "block";
    document.querySelector(".points3").style.display = "none";
    document.querySelector(".day-points3").style.display = "none";
    document.querySelector(".num-of-points3").style.display = "none";
  });

document.querySelector(".nextButton3").addEventListener("click", function () {
  whichTable = 4;
  document.querySelector(".green4").style.backgroundColor = "#17ff2a";
  document.querySelector(".green3").style.backgroundColor = "transparent";
  document.querySelector(".total-week-points").style.display = "block";
  document.querySelector(".Table1-3").style.display = "none";
  document.querySelector(".Table1-4").style.display = "block";
  document.querySelector(".Table1-4").style.marginTop = "0px";
  document.querySelector(".points3").style.display = "none";
  document.querySelector(".day-points3").style.display = "none";
  document.querySelector(".num-of-points3").style.display = "none";
  document.querySelector(".points4").style.display = "block";
  document.querySelector(".day-points4").style.display = "block";
  document.querySelector(".num-of-points4").style.display = "block";
  document.querySelector(".NP-Buttons4").style.display = "block";
  document.querySelector(".NP-Buttons3").style.display = "none";
});

document
  .querySelector(".previousButton4")
  .addEventListener("click", function () {
    whichTable = 3;
    document.querySelector(".total-week-points").style.display = "none";
    document.querySelector(".green3").style.backgroundColor = "#17ff2a";
    document.querySelector(".green4").style.backgroundColor = "transparent";
    document.querySelector(".Table1-3").style.display = "block";
    document.querySelector(".Table1-4").style.display = "none";
    document.querySelector(".NP-Buttons3").style.display = "block";
    document.querySelector(".NP-Buttons4").style.display = "none";
    document.querySelector(".points3").style.display = "block";
    document.querySelector(".day-points3").style.display = "block";
    document.querySelector(".num-of-points3").style.display = "block";
    document.querySelector(".points4").style.display = "none";
    document.querySelector(".day-points4").style.display = "none";
    document.querySelector(".num-of-points4").style.display = "none";
  });

document.querySelector(".Add-profile").addEventListener("click", function () {
  document.querySelector(".Button1").style.marginTop = "0px";
  document.querySelector(".Table2").style.display = "none";
  document.querySelector(".points2").style.display = "none";
  document.querySelector(".day-points2").style.display = "none";
  document.querySelector(".num-of-points2").style.display = "none";
  document.querySelector(".points3").style.display = "none";
  document.querySelector(".day-points3").style.display = "none";
  document.querySelector(".num-of-points3").style.display = "none";
  document.querySelector(".points4").style.display = "none";
  document.querySelector(".day-points4").style.display = "none";
  document.querySelector(".num-of-points4").style.display = "none";
  document.querySelector(".NP-Buttons").style.display = "none";
  document.querySelector(".Table1-Heading").style.display = "none";
  document.querySelector(".Table1-2").style.display = "none";
  document.querySelector(".add").style.display = "block";
  document.querySelector(".Select-all2").style.display = "block";
  document.querySelector(".Select-all2").style.marginTop = "85px";
  document.querySelector(".name").style.display = "none";
  document.querySelector(".Table1").style.display = "none";
  document.querySelector(".Table1-2").style.display = "none";
  document.querySelector(".Table1-3").style.display = "none";
  document.querySelector(".Table1-4").style.display = "none";
  document.querySelector(".Add-profile").style.display = "none";
  document.querySelector(".points").style.display = "none";
  document.querySelector(".NP-Buttons").style.display = "none";
  document.querySelector(".NP-Buttons2").style.display = "none";
  document.querySelector(".NP-Buttons3").style.display = "none";
  document.querySelector(".NP-Buttons4").style.display = "none";

  document.querySelector(".Button2").style.backgroundColor = "transparent";
  document
    .querySelector(".Button2")
    .addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgb(125, 123, 123)";
    });

  document
    .querySelector(".Button2")
    .addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
    });

  document.querySelector(".Button1").style.backgroundColor = "transparent";

  document
    .querySelector(".Button1")
    .addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgb(125, 123, 123)";
    });

  document
    .querySelector(".Button1")
    .addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
    });
});

let whichTable2 = 1;

document.querySelector(".Button2").addEventListener("click", function () {
  if (whichTable2 === 2) {
    console.log(2);
    document.querySelector(".Table2-2").style.display = "block";
    document.querySelector(".twoNP-Buttons2").style.display = "block";
    document.querySelector(".twoNP-Buttons").style.display = "none";
    document.querySelector(".twoNP-Buttons3").style.display = "none";
    document.querySelector(".twoNP-Buttons4").style.display = "none";
  } else if (whichTable2 === 3) {
    console.log(3);
    document.querySelector(".Table2-3").style.display = "block";
    document.querySelector(".twoNP-Buttons3").style.display = "block";
    document.querySelector(".twoNP-Buttons2").style.display = "none";
    document.querySelector(".twoNP-Buttons").style.display = "none";
    document.querySelector(".twoNP-Buttons4").style.display = "none";
  } else if (whichTable2 === 4) {
    console.log(4);
    document.querySelector(".Table2-4").style.display = "block";
    document.querySelector(".twoNP-Buttons4").style.display = "block";
    document.querySelector(".twoNP-Buttons").style.display = "none";
    document.querySelector(".twoNP-Buttons3").style.display = "none";
    document.querySelector(".twoNP-Buttons2").style.display = "none";
    document.querySelector(".total-week-points2").style.display = "block";
  } else {
    console.log(1);
    document.querySelector(".Table2").style.display = "block";
    document.querySelector(".twoNP-Buttons").style.display = "block";
    document.querySelector(".twoNP-Buttons2").style.display = "none";
    document.querySelector(".twoNP-Buttons3").style.display = "none";
    document.querySelector(".twoNP-Buttons4").style.display = "none";
  }

  document.querySelector(".NP-Buttons").style.display = "block";
  document.querySelector(".NP-Buttons2").style.display = "none";
  document.querySelector(".NP-Buttons3").style.display = "none";
  document.querySelector(".NP-Buttons4").style.display = "none";
  document.querySelector(".Table2").style.marginTop = "0px";
  document.querySelector(".points3").style.display = "none";
  document.querySelector(".individ-week-points").style.display = "none";
  document.querySelector(".total-week-points").style.display = "none";
  document.querySelector(".individ-week-points2").style.display = "block";
  document.querySelector(".add").style.display = "none";
  document.querySelector(".Select-all2").style.display = "none";
  document.querySelector(".Table2").style.marginLeft = "250px";
  document.querySelector(".Table1").style.display = "none";
  document.querySelector(".Table1-2").style.display = "none";
  document.querySelector(".Table1-3").style.display = "none";
  document.querySelector(".Table1-4").style.display = "none";
  document.querySelector(".points").style.display = "none";
  document.querySelector(".Add-profile").style.display = "block";
  document.querySelector(".Table1-Heading").style.display = "block";
  document.querySelector(".Table1-Heading").style.marginLeft = "175px";
  document.querySelector(".points2").style.display = "none";
  document.querySelector(".day-points2").style.display = "none";
  document.querySelector(".num-of-points2").style.display = "none";
  document.querySelector(".NP-Buttons").style.display = "none";
  document.querySelector(".NP-Buttons2").style.display = "none";
  document.querySelector(".NP-Buttons3").style.display = "none";
  document.querySelector(".NP-Buttons4").style.display = "none";
  document.querySelector(".Button2").style.backgroundColor = "#17ff2a";
  document.querySelector(".Button1").style.backgroundColor = "transparent";
  document.querySelector(".twoNextButton").style.marginTop = "-12%";
  document.querySelector(".twoPreviousButton").style.marginTop = "-9%";
  document
    .querySelector(".Button2")
    .addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgb(125, 123, 123)";
    });
  document
    .querySelector(".Button2")
    .addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#17ff2a";
    });
  document
    .querySelector(".Button1")
    .addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgb(125, 123, 123)";
    });
  document
    .querySelector(".Button1")
    .addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
    });
});

document.querySelector(".Button1").addEventListener("click", function () {
  if (whichTable === 1) {
    document.querySelector(".Table1").style.display = "block";
    document.querySelector(".Table1").style.marginTop = "0px";
    document.querySelector(".NP-Buttons").style.display = "block";
    document.querySelector(".twoNP-Buttons").style.display = "none";
    document.querySelector(".points").style.display = "block";
    document.querySelector(".day-points").style.display = "block";
    document.querySelector(".num-of-points").style.display = "block";
    document.querySelector(".points4").style.display = "none";
    document.querySelector(".day-points4").style.display = "none";
    document.querySelector(".num-of-points4").style.display = "none";
    document.querySelector(".points3").style.display = "none";
    document.querySelector(".day-points3").style.display = "none";
    document.querySelector(".num-of-points3").style.display = "none";
    document.querySelector(".points2").style.display = "none";
    document.querySelector(".day-points2").style.display = "none";
    document.querySelector(".num-of-points2").style.display = "none";
  } else if (whichTable === 2) {
    document.querySelector(".Table1-2").style.display = "block";
    document.querySelector(".NP-Buttons2").style.display = "block";
    document.querySelector(".points2").style.display = "block";
    document.querySelector(".day-points2").style.display = "block";
    document.querySelector(".num-of-points2").style.display = "block";
    document.querySelector(".points4").style.display = "none";
    document.querySelector(".day-points4").style.display = "none";
    document.querySelector(".num-of-points4").style.display = "none";
    document.querySelector(".points3").style.display = "none";
    document.querySelector(".day-points3").style.display = "none";
    document.querySelector(".num-of-points3").style.display = "none";
    document.querySelector(".points").style.display = "none";
    document.querySelector(".day-points").style.display = "none";
    document.querySelector(".num-of-points").style.display = "none";
    document.querySelector(".Table1-2").style.marginTop = "0px";
  } else if (whichTable === 3) {
    document.querySelector(".twoNP-Buttons").style.display = "none";
    document.querySelector(".Table1-3").style.display = "block";
    document.querySelector(".Table1-3").style.marginTop = "0%";
    document.querySelector(".NP-Buttons3").style.display = "block";
    document.querySelector(".points3").style.display = "block";
    document.querySelector(".day-points3").style.display = "block";
    document.querySelector(".num-of-points3").style.display = "block";
    document.querySelector(".points4").style.display = "none";
    document.querySelector(".day-points4").style.display = "none";
    document.querySelector(".num-of-points4").style.display = "none";
    document.querySelector(".points").style.display = "none";
    document.querySelector(".day-points").style.display = "none";
    document.querySelector(".num-of-points").style.display = "none";
    document.querySelector(".points2").style.display = "none";
    document.querySelector(".day-points2").style.display = "none";
    document.querySelector(".num-of-points2").style.display = "none";
    document.querySelector(".Table1-3").style.marginTop = "0px";
  } else if (whichTable === 4) {
    document.querySelector(".twoNP-Buttons").style.display = "none";
    document.querySelector(".Table1-4").style.display = "block";
    document.querySelector(".Table1-4").style.marginTop = "-5%";
    document.querySelector(".NP-Buttons4").style.display = "block";
    document.querySelector(".points4").style.display = "block";
    document.querySelector(".day-points4").style.display = "block";
    document.querySelector(".num-of-points4").style.display = "block";
    document.querySelector(".points").style.display = "none";
    document.querySelector(".day-points").style.display = "none";
    document.querySelector(".num-of-points").style.display = "none";
    document.querySelector(".points3").style.display = "none";
    document.querySelector(".day-points3").style.display = "none";
    document.querySelector(".num-of-points3").style.display = "none";
    document.querySelector(".points2").style.display = "none";
    document.querySelector(".day-points2").style.display = "none";
    document.querySelector(".num-of-points2").style.display = "none";
    document.querySelector(".Table1-4").style.marginTop = "0px";
  }
  document.querySelector(".individ-week-points").style.display = "block";
  document.querySelector(".individ-week-points2").style.display = "none";
  document.querySelector(".total-week-points2").style.display = "none";
  document.querySelector(".twoNP-Buttons").style.display = "none";
  document.querySelector(".twoNP-Buttons2").style.display = "none";
  document.querySelector(".twoNP-Buttons3").style.display = "none";
  document.querySelector(".twoNP-Buttons4").style.display = "none";
  document.querySelector(".Table2-3").style.display = "none";
  document.querySelector(".Table2-4").style.display = "none";
  document.querySelector(".Table2-2").style.display = "none";
  document.querySelector(".Table2").style.display = "none";
  document.querySelector(".add").style.display = "none";
  document.querySelector(".Add-profile").style.display = "block";
  document.querySelector(".Select-all2").style.display = "none";
  document.querySelector(".points").style.display = "block";
  document.querySelector(".Table1-Heading").style.display = "block";
  document.querySelector(".Table1-Heading").style.marginLeft = "175px";
  document.querySelector(".Button1").style.backgroundColor = "#17ff2a";
  document.querySelector(".Button2").style.backgroundColor = "transparent";
  document
    .querySelector(".Button1")
    .addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgb(125, 123, 123)";
    });
  document
    .querySelector(".Button1")
    .addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#17ff2a";
    });
  document
    .querySelector(".Button2")
    .addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgb(125, 123, 123)";
    });
  document
    .querySelector(".Button2")
    .addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
    });
});

document.querySelector(".submit2").addEventListener("click", function () {
  whichTable2 = 0;
  document.querySelector(".Button2").textContent =
    document.querySelector(".add").value;
  document.querySelector(".Button2").style.display = "block";
  document.querySelector(".points").style.display = "none";
  document.querySelector(".Button2").style.width = "160px";
  document.querySelector(".Button2").style.marginTop = "42px";
});

document.querySelector(".about").addEventListener("click", function () {
  document.querySelector(".about-me-sec").style.display = "block";
  document.querySelector(".home").style.display = "block";
  document.querySelector(".Bg-image").style.display = "none";
  document.querySelector(".PPBMT").style.display = "none";
  document.querySelector(".Sign-page").style.display = "none";
  document.querySelector(".mother").style.display = "none";
  document.querySelector(".developed").style.display = "none";
});

document.querySelector(".home").addEventListener("click", function () {
  document.querySelector(".about-me-sec").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".Bg-image").style.display = "block";
  document.querySelector(".PPBMT").style.display = "block";
  document.querySelector(".PPBMT").style.marginTop = "8.8%";
  document.querySelector(".Sign-page").style.display = "block";
  document.querySelector(".Sign-page").style.marginTop = "-27%";
  document.querySelector(".mother").style.display = "block";
  document.querySelector(".mother").style.marginTop = "-25%";
  document.querySelector(".mother").style.marginLeft = "79%";
  document.querySelector(".about").style.marginTop = "-44.5%";
});

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

const yes = document.querySelectorAll(".yes");

yes.forEach((yes) => {
  let clicked = false;
  yes.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week1-points").textContent =
        parseInt(document.querySelector(".week1-points").textContent) + 5;
      clicked = true;
    }
  });
});

const no = document.querySelectorAll(".no");

no.forEach((no) => {
  let clicked = false;
  no.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week1-points").textContent =
        parseInt(document.querySelector(".week1-points").textContent) - 1;
      clicked = true;
    }
  });
});

const yes2 = document.querySelectorAll(".yes2");

yes2.forEach((yes2) => {
  let clicked = false;
  yes2.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week2-points").textContent =
        parseInt(document.querySelector(".week2-points").textContent) + 5;
      clicked = true;
    }
  });
});

const no2 = document.querySelectorAll(".no2");

no2.forEach((no2) => {
  let clicked = false;
  no2.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week2-points").textContent =
        parseInt(document.querySelector(".week2-points").textContent) - 1;
      clicked = true;
    }
  });
});

const yes3 = document.querySelectorAll(".yes3");

yes3.forEach((yes3) => {
  let clicked = false;
  yes3.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week3-points").textContent =
        parseInt(document.querySelector(".week3-points").textContent) + 5;
      clicked = true;
    }
  });
});

const no3 = document.querySelectorAll(".no3");

no3.forEach((no3) => {
  let clicked = false;
  no3.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week3-points").textContent =
        parseInt(document.querySelector(".week3-points").textContent) - 1;
      clicked = true;
    }
  });
});

const yes4 = document.querySelectorAll(".yes4");

yes4.forEach((yes4) => {
  let clicked = false;
  yes4.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week4-points").textContent =
        parseInt(document.querySelector(".week4-points").textContent) + 5;
      document.querySelector(".total-week-points-amount").textContent =
        0 +
        parseInt(document.querySelector(".week1-points").textContent) +
        parseInt(document.querySelector(".week2-points").textContent) +
        parseInt(document.querySelector(".week3-points").textContent) +
        parseInt(document.querySelector(".week4-points").textContent);
      clicked = true;
    }
  });
});

const no4 = document.querySelectorAll(".no4");

no4.forEach((no4) => {
  let clicked = false;
  no4.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".week4-points").textContent =
        parseInt(document.querySelector(".week4-points").textContent) - 1;
      document.querySelector(".total-week-points-amount").textContent =
        0 +
        parseInt(document.querySelector(".week1-points").textContent) +
        parseInt(document.querySelector(".week2-points").textContent) +
        parseInt(document.querySelector(".week3-points").textContent) +
        parseInt(document.querySelector(".week4-points").textContent);
      clicked = true;
    }
  });
});

const yes5 = document.querySelectorAll(".yes5");

yes5.forEach((yes5) => {
  let clicked = false;
  yes5.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".twoWeek1-points").textContent =
        parseInt(document.querySelector(".twoWeek1-points").textContent) + 5;
      clicked = true;
    }
  });
});

const no5 = document.querySelectorAll(".no5");

no5.forEach((no5) => {
  let clicked = false;
  no5.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".twoWeek1-points").textContent =
        parseInt(document.querySelector(".twoWeek1-points").textContent) - 1;
      clicked = true;
    }
  });
});

const yes6 = document.querySelectorAll(".yes6");

yes6.forEach((yes6) => {
  let clicked = false;
  yes6.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".twoWeek2-points").textContent =
        parseInt(document.querySelector(".twoWeek2-points").textContent) + 5;
      clicked = true;
    }
  });
});

const no6 = document.querySelectorAll(".no6");

no6.forEach((no6) => {
  let clicked = false;
  no6.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".twoWeek2-points").textContent =
        parseInt(document.querySelector(".twoWeek2-points").textContent) - 1;
      clicked = true;
    }
  });
});

const yes7 = document.querySelectorAll(".yes7");

yes7.forEach((yes7) => {
  let clicked = false;
  yes7.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".twoWeek3-points").textContent =
        parseInt(document.querySelector(".twoWeek3-points").textContent) + 5;
      clicked = true;
    }
  });
});

const no7 = document.querySelectorAll(".no7");

no7.forEach((no7) => {
  let clicked = false;
  no7.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".twoWeek3-points").textContent =
        parseInt(document.querySelector(".twoWeek3-points").textContent) - 1;
      clicked = true;
    }
  });
});

const yes8 = document.querySelectorAll(".yes8");

yes8.forEach((yes8) => {
  let clicked = false;
  yes8.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".twoWeek4-points").textContent =
        parseInt(document.querySelector(".twoWeek4-points").textContent) + 5;
      document.querySelector(".total-week-points-amount2").textContent =
        0 +
        parseInt(document.querySelector(".twoWeek1-points").textContent) +
        parseInt(document.querySelector(".twoWeek2-points").textContent) +
        parseInt(document.querySelector(".twoWeek3-points").textContent) +
        parseInt(document.querySelector(".twoWeek4-points").textContent);
      clicked = true;
    }
  });
});

const no8 = document.querySelectorAll(".no8");

no8.forEach((no8) => {
  let clicked = false;
  no8.addEventListener("click", () => {
    if (!clicked) {
      document.querySelector(".2week4-points").textContent =
        parseInt(document.querySelector(".2week4-points").textContent) - 1;
      document.querySelector(".2total-week-points-amount").textContent =
        0 +
        parseInt(document.querySelector(".2week1-points").textContent) +
        parseInt(document.querySelector(".2week2-points").textContent) +
        parseInt(document.querySelector(".2week3-points").textContent) +
        parseInt(document.querySelector(".2week4-points").textContent);
      clicked = true;
    }
  });
});

Eggs.addEventListener("click", function () {
  document.querySelector(".ft1").textContent = "Eggs";
  document.querySelector(".twoft1").textContent = "Eggs";
  document.querySelector(".threeft1").textContent = "Eggs";
  document.querySelector(".fourft1").textContent = "Eggs";
});

Milk.addEventListener("click", function () {
  document.querySelector(".ft2").textContent = "Milk";
  document.querySelector(".twoft2").textContent = "Milk";
  document.querySelector(".threeft2").textContent = "Milk";
  document.querySelector(".fourft2").textContent = "Milk";
});

Rice.addEventListener("click", function () {
  document.querySelector(".ft3").textContent = "Rice";
  document.querySelector(".twoft3").textContent = "Rice";
  document.querySelector(".threeft3").textContent = "Rice";
  document.querySelector(".fourft3").textContent = "Rice";
});

Roti.addEventListener("click", function () {
  document.querySelector(".ft4").textContent = "Bread";
  document.querySelector(".twoft4").textContent = "Bread";
  document.querySelector(".threeft4").textContent = "Bread";
  document.querySelector(".fourft4").textContent = "Bread";
});

Fruits.addEventListener("click", function () {
  document.querySelector(".ft5").textContent = "Fruits";
  document.querySelector(".twoft5").textContent = "Fruits";
  document.querySelector(".threeft5").textContent = "Fruits";
  document.querySelector(".fourft5").textContent = "Fruits";
});

Vegetables.addEventListener("click", function () {
  document.querySelector(".ft6").textContent = "Vegetables";
  document.querySelector(".twoft6").textContent = "Vegetables";
  document.querySelector(".threeft6").textContent = "Vegetables";
  document.querySelector(".fourft6").textContent = "Vegetables";
});

Dates.addEventListener("click", function () {
  document.querySelector(".ft7").textContent = "Dates";
  document.querySelector(".twoft7").textContent = "Dates";
  document.querySelector(".threeft7").textContent = "Dates";
  document.querySelector(".fourft7").textContent = "Dates";
});

Nuts.addEventListener("click", function () {
  document.querySelector(".ft8").textContent = "Nuts";
  document.querySelector(".twoft8").textContent = "Nuts";
  document.querySelector(".threeft8").textContent = "Nuts";
  document.querySelector(".fourft8").textContent = "Nuts";
});

Others1.addEventListener("click", function () {
  document.querySelector(".ft9").textContent = "Others";
  document.querySelector(".twoft9").textContent = "Others";
  document.querySelector(".threeft9").textContent = "Others";
  document.querySelector(".fourft9").textContent = "Others";
});

SalahPrayer.addEventListener("click", function () {
  document.querySelector(".at10").textContent = "Prayer";
  document.querySelector(".twoat10").textContent = "Prayer";
  document.querySelector(".threeat10").textContent = "Prayer";
  document.querySelector(".fourat10").textContent = "Prayer";
});

SchoolHomework.addEventListener("click", function () {
  document.querySelector(".at11").textContent = "School Homework";
  document.querySelector(".twoat11").textContent = "School Homework";
  document.querySelector(".threeat11").textContent = "School Homework";
  document.querySelector(".fourat11").textContent = "School Homework";
});

Studies.addEventListener("click", function () {
  document.querySelector(".at12").textContent = "Studies";
  document.querySelector(".twoat12").textContent = "Studies";
  document.querySelector(".threeat12").textContent = "Studies";
  document.querySelector(".fourat12").textContent = "Studies";
});

PhysicalActivities.addEventListener("click", function () {
  document.querySelector(".at13").textContent = "Physical Activities";
  document.querySelector(".twoat13").textContent = "Physical Activities";
  document.querySelector(".threeat13").textContent = "Physical Activities";
  document.querySelector(".fourat13").textContent = "Physical Activities";
});

HelpToCleanTheHouse.addEventListener("click", function () {
  document.querySelector(".at14").textContent = "Help to Clean the House";
  document.querySelector(".twoat14").textContent = "Help to Clean the House";
  document.querySelector(".threeat14").textContent = "Help to Clean the House";
  document.querySelector(".fourat14").textContent = "Help to Clean the House";
});

Quran.addEventListener("click", function () {
  document.querySelector(".at15").textContent = "Quran";
  document.querySelector(".twoat15").textContent = "Quran";
  document.querySelector(".threeat15").textContent = "Quran";
  document.querySelector(".fourat15").textContent = "Quran";
});

Others2.addEventListener("click", function () {
  document.querySelector(".at16").textContent = "Others";
  document.querySelector(".twoat16").textContent = "Others";
  document.querySelector(".threeat16").textContent = "Others";
  document.querySelector(".fourat16").textContent = "Others";
});

twoEggs.addEventListener("click", function () {
  document.querySelector(".fiveft1").textContent = "Eggs";
  document.querySelector(".sixft1").textContent = "Eggs";
  document.querySelector(".sevenft1").textContent = "Eggs";
  document.querySelector(".eightft1").textContent = "Eggs";
});

twoMilk.addEventListener("click", function () {
  document.querySelector(".fiveft2").textContent = "Milk";
  document.querySelector(".sixft2").textContent = "Milk";
  document.querySelector(".sevenft2").textContent = "Milk";
  document.querySelector(".eightft2").textContent = "Milk";
});

twoRice.addEventListener("click", function () {
  document.querySelector(".fiveft3").textContent = "Rice";
  document.querySelector(".sixft3").textContent = "Rice";
  document.querySelector(".sevenft3").textContent = "Rice";
  document.querySelector(".eightft3").textContent = "Rice";
});

twoRoti.addEventListener("click", function () {
  document.querySelector(".fiveft4").textContent = "Bread";
  document.querySelector(".sixft4").textContent = "Bread";
  document.querySelector(".sevenft4").textContent = "Bread";
  document.querySelector(".eightft4").textContent = "Bread";
});

twoFruits.addEventListener("click", function () {
  document.querySelector(".fiveft5").textContent = "Fruits";
  document.querySelector(".sixft5").textContent = "Fruits";
  document.querySelector(".sevenft5").textContent = "Fruits";
  document.querySelector(".eightft5").textContent = "Fruits";
});

twoVegetables.addEventListener("click", function () {
  document.querySelector(".fiveft6").textContent = "Vegetables";
  document.querySelector(".sixft6").textContent = "Vegetables";
  document.querySelector(".sevenft6").textContent = "Vegetables";
  document.querySelector(".eightft6").textContent = "Vegetables";
});

twoDates.addEventListener("click", function () {
  document.querySelector(".fiveft7").textContent = "Dates";
  document.querySelector(".sixft7").textContent = "Dates";
  document.querySelector(".sevenft7").textContent = "Dates";
  document.querySelector(".eightft8").textContent = "Dates";
});

twoNuts.addEventListener("click", function () {
  document.querySelector(".fiveft8").textContent = "Nuts";
  document.querySelector(".sixft8").textContent = "Nuts";
  document.querySelector(".sevenft8").textContent = "Nuts";
  document.querySelector(".eightft8t").textContent = "Nuts";
});

twoOthers1.addEventListener("click", function () {
  document.querySelector(".fiveft9").textContent = "Others";
  document.querySelector(".sixft9").textContent = "Others";
  document.querySelector(".sevenft9").textContent = "Others";
  document.querySelector(".eightft9").textContent = "Others";
});

twoSalahPrayer.addEventListener("click", function () {
  document.querySelector(".fiveat10").textContent = "Prayer";
  document.querySelector(".sixat10").textContent = "Prayer";
  document.querySelector(".sevenat10").textContent = "Prayer";
  document.querySelector(".eightat10").textContent = "Prayer";
});

twoSchoolHomework.addEventListener("click", function () {
  document.querySelector(".fiveat11").textContent = "School Homework";
  document.querySelector(".sixat11").textContent = "School Homework";
  document.querySelector(".sevenat11").textContent = "School Homework";
  document.querySelector(".eightat11").textContent = "School Homework";
});

twoStudies.addEventListener("click", function () {
  document.querySelector(".fiveat12").textContent = "Studies";
  document.querySelector(".sixat12").textContent = "Studies";
  document.querySelector(".sevenat12").textContent = "Studies";
  document.querySelector(".eightat12").textContent = "Studies";
});

twoPhysicalActivities.addEventListener("click", function () {
  document.querySelector(".fiveat13").textContent = "Physical Activities";
  document.querySelector(".sixat13").textContent = "Physical Activities";
  document.querySelector(".sevenat13").textContent = "Physical Activities";
  document.querySelector(".eightat13").textContent = "Physical Activities";
});

twoHelpToCleanTheHouse.addEventListener("click", function () {
  document.querySelector(".fiveat14").textContent = "Help to Clean the House";
  document.querySelector(".sixat14").textContent = "Help to Clean the House";
  document.querySelector(".sevenat14").textContent = "Help to Clean the House";
  document.querySelector(".eightat14").textContent = "Help to Clean the House";
});

twoQuran.addEventListener("click", function () {
  document.querySelector(".fiveat15").textContent = "Quran";
  document.querySelector(".sixat15").textContent = "Quran";
  document.querySelector(".sevenat15").textContent = "Quran";
  document.querySelector(".eightat15").textContent = "Quran";
});

twoOthers2.addEventListener("click", function () {
  document.querySelector(".fiveat16").textContent = "Others";
  document.querySelector(".sixat16").textContent = "Others";
  document.querySelector(".sevenat16").textContent = "Others";
  document.querySelector(".eightat16").textContent = "Others";
});

var checkbox = document.getElementById("myCheckbox");
checkbox.addEventListener("click", incrementCount);

function incrementCount() {
  var count = 0;
  count++;
  var countDisplay = document.getElementById("countDisplay");
  countDisplay.textContent = count;
}

document.querySelector(".twoNextButton").addEventListener("click", function () {
  whichTable2 = 2;
  document.querySelector(".twoGreen2").style.backgroundColor = "#17ff2a";
  document.querySelector(".twoGreen1").style.backgroundColor = "transparent";
  document.querySelector(".individ-week-points2").style.marginTop = "-20%";
  document.querySelector(".Table2-2").style.display = "block";
  document.querySelector(".Table2-2").style.marginTop = "0px";
  document.querySelector(".twoNP-Buttons").style.display = "none";
  document.querySelector(".twoNP-Buttons2").style.display = "block";
  document.querySelector(".Table2").style.display = "none";
});

document
  .querySelector(".twoPreviousButton2")
  .addEventListener("click", function () {
    whichTable2 = 1;
    document.querySelector(".twoGreen1").style.backgroundColor = "#17ff2a";
    document.querySelector(".twoGreen2").style.backgroundColor = "transparent";
    document.querySelector(".Table2-2").style.display = "none";
    document.querySelector(".individ-week-points2").style.marginTop = "-6%";
    document.querySelector(".twoNP-Buttons").style.display = "block";
    document.querySelector(".twoNP-Buttons2").style.display = "none";
    document.querySelector(".Table2").style.display = "block";
  });

document
  .querySelector(".twoNextButton2")
  .addEventListener("click", function () {
    whichTable2 = 3;
    document.querySelector(".twoGreen3").style.backgroundColor = "#17ff2a";
    document.querySelector(".twoGreen2").style.backgroundColor = "transparent";
    document.querySelector(".Table2-3").style.display = "block";
    document.querySelector(".Table2-3").style.marginTop = "0px";
    document.querySelector(".twoNP-Buttons3").style.display = "block";
    document.querySelector(".twoNP-Buttons2").style.display = "none";
    document.querySelector(".Table2-2").style.display = "none";
  });

document
  .querySelector(".twoPreviousButton3")
  .addEventListener("click", function () {
    whichTable2 = 2;
    document.querySelector(".twoGreen2").style.backgroundColor = "#17ff2a";
    document.querySelector(".twoGreen3").style.backgroundColor = "transparent";
    document.querySelector(".Table2-3").style.display = "none";
    document.querySelector(".twoNP-Buttons2").style.display = "block";
    document.querySelector(".twoNP-Buttons3").style.display = "none";
    document.querySelector(".Table2-2").style.display = "block";
  });

document
  .querySelector(".twoNextButton3")
  .addEventListener("click", function () {
    whichTable2 = 4;
    document.querySelector(".twoGreen4").style.backgroundColor = "#17ff2a";
    document.querySelector(".twoGreen3").style.backgroundColor = "transparent";
    document.querySelector(".Table2-4").style.display = "block";
    document.querySelector(".Table2-4").style.marginTop = "0px";
    document.querySelector(".twoNP-Buttons4").style.display = "block";
    document.querySelector(".twoNP-Buttons3").style.display = "none";
    document.querySelector(".Table2-3").style.display = "none";
    document.querySelector(".total-week-points2").style.display = "block";
  });

document
  .querySelector(".twoPreviousButton4")
  .addEventListener("click", function () {
    whichTable2 = 3;
    document.querySelector(".twoGreen3").style.backgroundColor = "#17ff2a";
    document.querySelector(".twoGreen4").style.backgroundColor = "transparent";
    document.querySelector(".Table2-4").style.display = "none";
    document.querySelector(".twoNP-Buttons3").style.display = "block";
    document.querySelector(".twoNP-Buttons4").style.display = "none";
    document.querySelector(".Table2-3").style.display = "block";
    document.querySelector(".total-week-points2").style.display = "none";
  });
