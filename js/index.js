// Popup
function togglePopup(elementId) {
  document.getElementById('overlay').classList.toggle("hidden");
  document.getElementById(elementId).classList.toggle("hidden");
}

// Dismisses popups
function dismissPopups() {
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
      changePage("forms/marriage.html");
      break;
    case "youthActivity":
      changePage("forms/youth.html");
      break;
    case "anniversary":
      changePage("forms/anniversary.html");
      break;
    case "prayerMeeting":
      changePage("forms/prayer.html");
      break;
    case "practice":
      changePage("forms/practice.html");
      break;
    case "other":
      changePage("forms/other.html");
      break;
    default:
  }
}

// Generate QR Code
function generateQR() {

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
  var tableRow = element.parentElement.closest('tr') === null ? element : element.parentElement.parentElement;

  var tableCell = tableRow.firstElementChild;

  if (tableCell.firstElementChild.checked && cancel != true) {
    checkedBoxCounter++;
    tableRow.classList.add("row-selected");
  } else {
    checkedBoxCounter--;
    tableRow.classList.remove("row-selected");
  }
  changeToday(tableCell, tableCell.firstElementChild.checked)

  showTableOptions();
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

function getData(type, id) {
  // Use get method in php to access data in database
  // Change event type that matches event type in database
  switch (type) {
    case "baptismal":
      changePage("details/baptismal.html");
      break;
    case "marriage":
      changePage("details/marriage.html");
      break;
    case "youthActivity":
      changePage("details/youth.html");
      break;
    case "anniversary":
      changePage("details/anniversary.html");
      break;
    case "prayerMeeting":
      changePage("details/prayer.html");
      break;
    case "practice":
      changePage("details/practice.html");
      break;
    case "other":
      changePage("details/other.html");
      break;
    case "activity":
      changePage("activity-details.html");
      break;
    default:
  }
}

function getCertificate(eventType, id, event) {
  // Use get method in php to access data in database
  // Change event type that matches event type in database
  switch (eventType) {
    case "baptismal":
      // changePage("certificate/baptismal.html");
      break;
    case "marriage":
      // changePage("certificate/marriage.html");
      break;
    default:
  }

  event.stopPropagation();
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

document.addEventListener("keydown", ({
  key
}) => {
  // Close popups when escape esc pressed
  if (key === "Escape") {
    console.log("escape pressed");
    dismissPopups();
  }
})

// Event listener for overlay
document.getElementById('overlay').addEventListener('click', function(e) {
  console.log("Overlay clicked");
  dismissPopups();
})

// Stick header to top
window.onscroll = function() {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 100) {
    console.log("Offset 100 greater than 100");
    document.getElementById("certificateHeader").classList.add("certificate");
  } else {
    console.log("At top");
    document.getElementById("certificateHeader").classList.remove("certificate");
  }
}
