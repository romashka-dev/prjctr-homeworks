'use-strict'

// --- TASK 1 --- //
// Реалізуйте наступну систему на прототипному успадкуванні:
// 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)
// 3) у кожного класу має бути своя унікальна властивість
// 4) у двох класів має бути спільний предок та спільний метод характерний тільки для них
// 5) у всіх чотирьох класів має бути один (крім проміжних) клас-предок


// COMMON CLASS FOR APARTMENTS AND ORGANIZATION
function CommonRules(phoneNumber) {
    this.phoneNumber = phoneNumber;
}

// Загальний метод, що використовується для класів Apartments і Organization
CommonRules.prototype.getPhoneNumber = function() {
    return this.phoneNumber;
};

// END ==> COMMON CLASS


// CLASS CAR
function Car(brand, model, color, bodyType, transmission, typeOfFuel) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.bodyType = bodyType;
    this.transmission = transmission;
    this.typeOfFuel = typeOfFuel;
    this.isEngineRunning = false;
}

Car.prototype.startEngine = function() {
    if (!this.isEngineRunning) {
        this.isEngineRunning = true;
        console.log("Engine started!");
    } else {
        console.log("Engine is already running.");
    }
};

Car.prototype.stopEngine = function() {
    if (this.isEngineRunning) {
        this.isEngineRunning = false;
        console.log("Engine stopped.");
    } else {
        console.log("Engine is already stopped.");
    }
};

Car.prototype.getCarInfo = function() {
    return {
        brand: this.brand,
        model: this.model,
        color: this.color,
        bodyType: this.bodyType,
        transmission: this.transmission,
        typeOfFuel: this.typeOfFuel
    };
};

// END ==> CLASS CAR


// CLASS CAT
function Cat(name, color, breed, age) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
}

Cat.prototype.healthy = function(answer) {
    return console.log(`My veterinarian says: ${answer}`);
};

Cat.prototype.meow = function() {
    console.log(`${this.name} says: Meow!`);
};

Cat.prototype.sleep = function() {
    console.log(`${this.name} is sleeping.`);
};

// END ==> CLASS CAT


// CLASS APARTMENTS 
function Apartments(address, bedroomQuantity, wifi, kitchen, bathroom, parking, phoneNumber) {
    CommonRules.call(this);
    this.address = address;
    this.bedroomQuantity = bedroomQuantity;
    this.wifi = wifi;
    this.kitchen = kitchen;
    this.bathroom = bathroom;
    this.parking = parking;
    this.phoneNumber = phoneNumber;
}

Apartments.prototype = Object.create(CommonRules.prototype);

Apartments.prototype.getAddress = function() {
    return this.address;
};

Apartments.prototype.hasWifi = function() {
    return this.wifi ? "Yes" : "No";
};

Apartments.prototype.hasParking = function() {
    return this.parking ? "Yes" : "No";
};

Apartments.prototype.getApartmentInfo = function() {
    return {
        address: this.address,
        bedroomQuantity: this.bedroomQuantity,
        hasWifi: this.hasWifi(),
        hasKitchen: this.kitchen ? "Yes" : "No",
        hasBathroom: this.bathroom ? "Yes" : "No",
        hasParking: this.hasParking(),
    };
};

// END ==> CLASS APARTMENTS


// CLASS ORGANIZATION 
function Organization(industries, headquartersRegions, foundedDate, founders, operatingStatus, lastFundingType, legalName, companyType, phoneNumber) {
    CommonRules.call(this);
    this.industries = industries;
    this.headquartersRegions = headquartersRegions;
    this.foundedDate = foundedDate;
    this.founders = founders;
    this.operatingStatus = operatingStatus;
    this.lastFundingType = lastFundingType;
    this.legalName = legalName;
    this.companyType = companyType;
    this.phoneNumber = phoneNumber;
}

Organization.prototype = Object.create(CommonRules.prototype);

Organization.prototype.getIndustries = function() {
    return this.industries;
};

Organization.prototype.getFounders = function() {
    return this.founders;
};

Organization.prototype.isOperating = function() {
    return this.operatingStatus === "active";
};

Organization.prototype.getOrganizationInfo = function() {
    return {
        industries: this.industries,
        headquartersRegions: this.headquartersRegions,
        foundedDate: this.foundedDate,
        founders: this.founders,
        operatingStatus: this.operatingStatus,
        lastFundingType: this.lastFundingType,
        legalName: this.legalName,
        companyType: this.companyType,
        phoneNumber: this.phoneNumber
    };
};

// END ==> CLASS ORGANIZATION 


// Створення шаблонів і методів для тестування
const myCar = new Car("Volkswagen", "Golf GTI", "black", "hatchback", "automatic", "petrol");
myCar.startEngine();
myCar.startEngine();
myCar.stopEngine();
myCar.stopEngine();
console.log(myCar.getCarInfo());

const myCat = new Cat("Tina", "Gray", "British Shorthair", "3");
myCat.healthy('yes'); // Виведе: My veterinarian says: yes
myCat.meow(); // Виведе: Tina says: Meow!
myCat.sleep(); // Виведе: Tina is sleeping.

const myfriendApt = new Apartments("st.Dontsova 5, Lviv, Ukraine", "1", true, true, true, false, "+38(095)555-55-55");
console.log(myfriendApt.getApartmentInfo());
console.log(myfriendApt.getPhoneNumber());

const myOrganization = new Organization(
    "Intel",
    "San Francisco Bay Area, Silicon Valley, West Coast",
    "Jul 18, 1968",
    "Gordon Moore, Patrick Reilly, Robert Noyce",
    "Active",
    "Post-IPO Equity",
    "Intel Corporation",
    "For Profit",
    "+1 408-765-8080"
);
console.log(myOrganization.getOrganizationInfo());
console.log(myOrganization.getPhoneNumber());