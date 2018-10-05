enum DayOfWeek {
    SUN = 1, MON, TUE, WED, THU, FRI, SAT
}

let day: DayOfWeek;
day = DayOfWeek.MON;

if (day === DayOfWeek.MON) {
    console.log("Got to go to work")
}

console.log(DayOfWeek.SAT)