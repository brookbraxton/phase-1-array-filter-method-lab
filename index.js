// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function for fuzzy matching (names that begin with provided letters)
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Function to match driver objects by name
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example usage:
const drivers = ['Alice', 'Bob', 'Charlie', 'alice', 'David'];
const driverObjects = [
    { name: 'Alice', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Charlie', hometown: 'Chicago' }
];

console.log(findMatching(drivers, 'Alice')); // ['Alice', 'alice']
console.log(fuzzyMatch(drivers, 'Al')); // ['Alice', 'alice']
console.log(matchName(driverObjects, 'Alice')); // [{ name: 'Alice', hometown: 'New York' }]
