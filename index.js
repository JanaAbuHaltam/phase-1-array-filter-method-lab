function findMatching(drivers, name) {
    return drivers.filter((driver) => {
            if (driver.toLowerCase() === name.toLowerCase() ) {
                return driver;
            }
        }
        );
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => { 
        if (driver.indexOf(letters) ===0 ) {
        return driver;
    }
}
    )
}

function matchName(driversObject, name) {
    return driversObject.filter(driver => driver.name === name)
}
 
  