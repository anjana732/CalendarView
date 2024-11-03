const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();
const calendarDates = document.getElementById("calendar-dates");
const monthYearDisplay = document.getElementById("calendar-month-year");

function loadCalendar() {
calendarDates.innerHTML = "";
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

monthYearDisplay.textContent = `${monthNames[month]}, ${year}`;

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
const emptyCell = document.createElement("div");
calendarDates.appendChild(emptyCell);
}

for (let day = 1; day <= daysInMonth; day++) {
const dateCell = document.createElement("div");
dateCell.classList.add("calendar-date");

const dayLabel = document.createElement("span");
dayLabel.textContent = day;
dateCell.appendChild(dayLabel);

// Sample Events
if (day === 2 || day === 4) {
const event1 = document.createElement("div");
event1.classList.add("event");
event1.textContent = "Arun Div Manager";
dateCell.appendChild(event1);

const event2 = document.createElement("div");
event2.classList.add("event");
event2.textContent = "Kumar Employee";
dateCell.appendChild(event2);
}

if (day === 5) {
const eventUrgent = document.createElement("div");
eventUrgent.classList.add("event", "urgent");
eventUrgent.textContent = "Task M 24-4 (Urgent)";
dateCell.appendChild(eventUrgent);
}

calendarDates.appendChild(dateCell);
}
}

function prevMonth() {
currentDate.setMonth(currentDate.getMonth() - 1);
loadCalendar();
}

function nextMonth() {
currentDate.setMonth(currentDate.getMonth() + 1);
loadCalendar();
}

loadCalendar();
