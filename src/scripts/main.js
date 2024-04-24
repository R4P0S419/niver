AOS.init();

const dateEvent = new Date("May 23, 2024 19:00:00");
const timeStampEvent = dateEvent.getTime();

const timer = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const tracerTimer = timeStampEvent - timeStampNow;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hrInMs = 1000 * 60 * 60;
    const mntInMs = 1000 * 60;
    

    const dayOfEvent = Math.floor(tracerTimer / dayInMs);
    const hrToEvent =  Math.floor((tracerTimer % dayInMs) / hrInMs);
    const mntToEvent = Math.floor((tracerTimer % hrInMs) / mntInMs);
    const sgdToEvent = Math.floor((tracerTimer % mntInMs) / 1000);
    console.log(dayOfEvent);
    console.log(hrToEvent);
    console.log(mntToEvent);
    console.log(sgdToEvent);

    document.getElementById('timer').innerHTML = `${dayOfEvent}d ${hrToEvent}h ${mntToEvent}m ${sgdToEvent}`;
}, 1000);

