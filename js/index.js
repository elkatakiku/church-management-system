// Popup
function togglePopup(elementId) {
  document.getElementById('overlay').classList.toggle("hidden");
  document.getElementById(elementId).classList.toggle("hidden");
}

// Change Directory
function changePage(fileDir) {
  window.location.href = fileDir;
}

// Schedule Event
function scheduleEvent(eventChoice) {
  switch (document.getElementById(eventChoice).value) {
    case "baptismal":
      changePage("forms/baptismal.html");
      break;
    case "marriage":
      changePage();
      break;
    case "youthActivities":
      changePage();
      break;
    case "anniversaries":
      changePage();
      break;
    case "prayerMeeting":
      changePage();
      break;
    case "practice":
      changePage();
      break;
    case "others":
      changePage();
      break;
    default:
  }
}

// Table Functionality
var numberOfRows;
if (document.getElementById('tableData') != null) {
  numberOfRows = document.getElementById('tableData').childElementCount;
}

function togglePopup(elementId) {
  document.getElementById('overlay').classList.toggle("hidden");
  document.getElementById(elementId).classList.toggle("hidden");
}

function selectAllCheckbox(elementId, cancel = false) {
  var selectAll = document.getElementById(elementId);
  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    if ((inputs[i] != selectAll) && (inputs[i].parentElement.closest('tr') !== null)) {
      if (inputs[i].checked != selectAll.checked) {
        inputs[i].checked = selectAll.checked;
        selectRow(inputs[i], cancel);
      } else if (inputs[i].checked && cancel) {
        inputs[i].checked = selectAll.checked = false;
        selectRow(inputs[i], cancel);
      }
    }
  }
}

var checkedBoxCounter = 0;

function checkedRow(rowId, event) {
  var input = document.getElementById(rowId);
  selectRow(input);

  document.getElementById("selectAll").checked = (numberOfRows === checkedBoxCounter ? true : false);
  event.stopPropagation();
}

function selectRow(element, cancel) {
  var row = element.parentElement.closest('tr');
  getToday((row === null ? element : element.parentElement.parentElement), cancel);
  showTableOptions();
}

function getToday(tableRow, cancel) {
  var tableCell = tableRow.firstElementChild;

  if (tableCell.firstElementChild.checked && cancel != true) {
    checkedBoxCounter++;
    tableRow.classList.add("row-selected");
  } else {
    checkedBoxCounter--;
    tableRow.classList.remove("row-selected");
  }
  changeToday(tableCell, tableCell.firstElementChild.checked)
}

function changeToday(tableCell, isChecked) {
  while (tableCell) {
    if (tableCell.classList.contains('today')) {
      if (isChecked) {
        tableCell.classList.add("row-selected-today");
      } else {
        tableCell.classList.remove("row-selected-today");
      }
    }
    tableCell = tableCell.nextElementSibling;
  }
}

function showTableOptions() {
  var options = document.getElementById('tableSelectOptions');
  console.log("Rows: " + numberOfRows);
  console.log("Counter: " + checkedBoxCounter);

  if (checkedBoxCounter > 0 && options.classList.contains('hidden')) {
    options.classList.remove("hidden");
  } else if (checkedBoxCounter === 0) {
    options.classList.add("hidden");
  }
}

// Sliding div
// let slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("header-slides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }


document.addEventListener("keydown", ({key}) => {
  // Close popups when escape esc pressed
    if (key === "Escape") {
      console.log("escape pressed");
      console.log("Getting popups");
      var popups = document.getElementsByClassName("popup");
      console.log("Got popups");
      console.log(popups);
      for (var i = 0; i < popups.length; i++) {
        console.log("Getting popup container");
        console.log(popups[i].parentElement);
        var popupContainer = popups[i].parentElement;
        if (!popupContainer.classList.contains("hidden")) {
          document.getElementById('overlay').classList.add("hidden");
          popupContainer.classList.add("hidden");
        }
      }
    }
})
