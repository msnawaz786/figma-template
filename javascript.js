
const tabLinks = document.querySelectorAll('.aside-list');
const contentTab = document.querySelectorAll(".tab-content");

tabLinks.forEach((asideTab) => {
  asideTab.addEventListener("click", function () {


    tabLinks.forEach((asideTabshow) => {
      asideTabshow.classList.remove("active");
    })

    asideTab.classList.add("active");
    // const asideList = asideTab.getAttribute("data-asidebar");

    contentTab.forEach((asidecontent) => {
      asidecontent.classList.remove("aside-tab-content-active");
    })
    // const asideContentshow = document.querySelector(`.tab-content[data-asidebar="${asideList}"]`)
    asidecontent.classList.add("aside-tab-content-active");
  })
})





// const tabLinks = document.querySelectorAll('.aside-list');
// const contentTab = document.querySelectorAll('.tab-content');

// tabLinks.forEach(tab => {
//   tab.addEventListener('click', function () {
//     tabLinks.forEach(link => link.classList.remove('active'));
//     tab.classList.add('active');
//   });
// });

// contentTab.forEach(tabasidecontent => {
//   tabasidecontent.addEventListener('click', function () {
//     contentTab.forEach(link1 => link1.classList.remove('aside-tab-content-active'));
//     tabasidecontent.classList.add('aside-tab-content-active');
//   });
// });




const tabLinks2 = document.querySelectorAll('.aside-sub-list');

// Add click event listeners to each tab
tabLinks2.forEach(tab => {
  tab.addEventListener('click', function () {
    // Remove 'active' class from all tabs
    tabLinks2.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked tab
    tab.classList.add('active');
  });
});

//       holiday summary tab code
let holidaySummarySelect = document.querySelector(".holiday-summary-select");
let holidaySummaryContent = document.querySelector(".holiday-summary-content");

holidaySummarySelect.addEventListener("click", function () {
  holidaySummaryContent.classList.toggle("holiday-active");
})

let searchHolidayrecord = document.querySelector(".search-holiday-record");
let holidayRecordsection = document.querySelector(".holiday-record-section");

searchHolidayrecord.addEventListener("click", function () {
  holidayRecordsection.classList.add("holiday-record-section-active");
})

let addHolidayTopbar = document.querySelector(".add-holiday-topbar");
let addHolidaytableData = document.querySelector(".add-holiday-table-data");

addHolidayTopbar.addEventListener("click", function () {
  addHolidaytableData.classList.toggle("add-holiday-active");
})




//  active content 
function activeTabcontent() {
  const clickTab = document.querySelectorAll(".recruitment-tab>div");  //select ALL DIV ON WHICH I HAVE TO CLICK :[div,div,div]
  const contentShow = document.querySelectorAll(".meter");  //select ALL content div WHICH I HAVE TO show :[div,div,div]   // foreach ya map

  clickTab.forEach((collectTab) => {
    collectTab.addEventListener("click", function () {

      //for tab
      clickTab.forEach((itemTab) => { //remove all div class
        itemTab.classList.remove("recruitment-active-tab");
      })
      collectTab.classList.add("recruitment-active-tab");
      const atribute = collectTab.getAttribute("data-show");

      //for content
      contentShow.forEach((contentitem) => {//remove all div class
        contentitem.classList.remove("recruitment-active-content");
      })
      const content = document.querySelector(`.meter[data-show="${atribute}"]`)
      content.classList.add("recruitment-active-content");


    })
  })
}

activeTabcontent();

// for graph chart
window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,

    data: [{
      type: "pie",
      startAngle: 325,

      dataPoints: [
        { y: 75.45, color: "#F3C993" },
        { y: 13.31, color: "#295969" },
        { y: 5.06, color: "#34839E" },

      ]
    }]
  });
  chart.render();

}
// graph chart end


document.addEventListener('DOMContentLoaded', function () {
  // Select only checkboxes with the 'dropdown-checkbox' class
  const checkboxes = document.querySelectorAll('.dropdown-checkbox');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      // Close all other checkboxes by unchecking them
      checkboxes.forEach(function (otherCheckbox) {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false; // Uncheck the others
        }
      });
    });
  });
});



