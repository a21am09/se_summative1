function schoolSizeCalculate(schoolType, pupilPlaces) {
    if (Number.isInteger(Number(pupilPlaces)) || !Number(pupilPlaces) === "Nan") {
        if (schoolType === "primary") {
            baseArea = 350;
            pupilMultiplier = 4.1;
        }
        else if (schoolType === "secondary16") {
            baseArea = 1050;
            pupilMultiplier = 6.3;
        }
        else if (schoolType === "secondary16+") {
            baseArea = 1400;
            pupilMultiplier = 7;
        }
        else {
            return "Error"
        }
        result = baseArea + (pupilMultiplier * pupilPlaces);
        return result
    }
    else {
        return "Please enter the number of pupil places as a whole number."
    }
};
module.exports = {schoolSizeCalculate}