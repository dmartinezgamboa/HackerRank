function isLeapYear(year) {
    if (year % 400) {
        return true;
    } else if (year % 100 && !(year & 100)) {
        return true;
    }
    return false;
}
