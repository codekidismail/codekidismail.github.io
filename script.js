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

// Get the text input element
const Name = document.querySelector(".name");
let whichTable = 0;

document.querySelector(".submit1").addEventListener("click", function () {
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
});

document.querySelector(".nextButton").addEventListener("click", function () {
  whichTable = 2;
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

document.querySelector(".Button2").addEventListener("click", function () {
  document.querySelector(".add").style.display = "none";
  document.querySelector(".Select-all2").style.display = "none";
  document.querySelector(".Table2").style.display = "block";
  document.querySelector(".Table2").style.marginLeft = "250px";
  document.querySelector(".Table1").style.display = "none";
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
  document.querySelector(".twoNP-Buttons").style.display = "block";
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
    document.querySelector(".NP-Buttons").style.display = "block";
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
  } else if (whichTable === 3) {
    document.querySelector(".Table1-3").style.display = "block";
    document.querySelector(".Table1-3").style.marginTop = "-5%";
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
  } else if (whichTable === 4) {
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
  }

  document.querySelector(".points2").style.display = "block";
  document.querySelector(".day-points2").style.display = "block";
  document.querySelector(".num-of-points2").style.display = "block";
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
const numOfPoints = document.querySelector(".num-of-points");

yes.forEach((yes) => {
  let clicked = false;
  yes.addEventListener("click", () => {
    if (!clicked) {
      numOfPoints.textContent = parseInt(numOfPoints.textContent) + 5;
      clicked = true;
    }
  });
});

const yes2 = document.querySelectorAll(".yes2");
const numOfPoints2 = document.querySelector(".num-of-points2");

yes2.forEach((yes2) => {
  let clicked = false;
  yes2.addEventListener("click", () => {
    if (!clicked) {
      numOfPoints2.textContent = parseInt(numOfPoints2.textContent) + 5;
      clicked = true;
    }
  });
});

const no2 = document.querySelectorAll(".no2");

no2.forEach((no2) => {
  let clicked = false;
  no2.addEventListener("click", () => {
    if (!clicked) {
      numOfPoints2.textContent = parseInt(numOfPoints2.textContent) - 1;
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
  document.querySelector(".ft4").textContent = "Roti";
  document.querySelector(".twoft4").textContent = "Roti";
  document.querySelector(".threeft4").textContent = "Roti";
  document.querySelector(".fourft4").textContent = "Roti";
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

var checkbox = document.getElementById("myCheckbox");
checkbox.addEventListener("click", incrementCount);

function incrementCount() {
  var count = 0;
  count++;
  var countDisplay = document.getElementById("countDisplay");
  countDisplay.textContent = count;
}
