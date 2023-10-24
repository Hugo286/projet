document.addEventListener("DOMContentLoaded", function () {
    const eventForm = document.getElementById("event-form");

    eventForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const dateInput = document.getElementById("date");
        const evenementInput = document.getElementById("evenement");
        const alerteInput = document.getElementById("alerte");

        const date = dateInput.value;
        const evenement = evenementInput.value;
        const alerte = parseInt(alerteInput.value);

        addEventToCalendar(date, evenement, alerte);

        dateInput.value = "";
        evenementInput.value = "";
        alerteInput.value = "";
    });
});

function addEventToCalendar(date, evenement, alerte) {
    const calendarEl = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarEl);

    const event = {
        title: evenement,
        start: date,
        allDay: true, // Événement sur toute la journée
        extendedProps: {
            alert: alerte,
        },
    };

    calendar.addEvent(event);

    if (alerte > 0) {
        const alertTime = new Date(date);
        alertTime.setMinutes(alertTime.getMinutes() - alerte);

        setTimeout(function () {
            alert(`Rappel : ${evenement}`);
        }, alertTime - new Date());
    }
}
