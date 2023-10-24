document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        events: [],
        eventClick: function (info) {
            if (info.event.extendedProps.alert) {
                const alertMinutes = info.event.extendedProps.alert;
                const alertTime = new Date(info.event.start);
                alertTime.setMinutes(alertTime.getMinutes() - alertMinutes);

                setTimeout(function () {
                    alert(`Rappel : ${info.event.title}`);
                }, alertTime - new Date());
            }
        }
    });

    calendar.render();
});
