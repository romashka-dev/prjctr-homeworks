'use-strict'

// --- TASK 1 --- //
// Реалізуйте наступну систему, схожу до розглянутої на вебінарі:
// 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)
// 3) у кожного класу має бути своя унікальна властивість
// 4) у кожного класу має бути приватна властивість
// 5) у двох класів має бути спільний предок та спільний метод характерний тільки для них
// 6) у всіх чотирьох класів має бути один (крім проміжних) клас-предок


// COMMON CLASS FOR APARTMENTS AND ORGANIZATION
class CommonRules {
    #privatPropertyCommonRules;

    constructor(phoneNumber) {
      this.phoneNumber = phoneNumber;

      // Приватна властивість в цьому класі
      this.#privatPropertyCommonRules = 'This is a privat property for class CommonRules';
    }
  
    // Загальний метод, що використовується для класів Apartments і Organization
    getPhoneNumber() {
      return this.phoneNumber;
    }
}
// COMMON CLASS ==> END


// CLASS CAR
class Car {
    #privatPropertyCar;

    constructor(brand, model, color, bodyType, transmission, typeOfFuel) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.bodyType = bodyType;
        this.transmission = transmission;
        this.typeOfFuel = typeOfFuel;
        this.isEngineRunning = false;

        // Приватна властивість в цьому класі 
        this.#privatPropertyCar = 'This is a privat property for class Car';
    }

    startEngine() {
        if (!this.isEngineRunning) {
            this.isEngineRunning = true;
            console.log("Engine started!");
        } else {
            console.log("Engine is already running.");
        }
    }

    stopEngine() {
        if (this.isEngineRunning) {
            this.isEngineRunning = false;
            console.log("Engine stopped.");
        } else {
            console.log("Engine is already stopped.");
        }
    }

    getCarInfo() {
        return {
            brand: this.brand,
            model: this.model,
            color: this.color,
            bodyType: this.bodyType,
            transmission: this.transmission,
            typeOfFuel: this.typeOfFuel
        };
    }
}
const myCar = new Car("Volkswagen", "Golf GTI", "black", "hatchback", "automatic", "petrol");
myCar.startEngine(); // Виведе: Engine started!
myCar.startEngine(); // Виведе: Engine is already running.
myCar.stopEngine(); // Виведе: Engine stopped!
myCar.stopEngine(); // Виведе: Engine is already stopped.
console.log(myCar.getCarInfo()); // Виведе об'єкт

// CLASS CAR => END


// CLASS CAT
class Cat {
    #privatPropertyCat;

    constructor(name, color, breed, age) {
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.age = age;

        // Приватна властивість в цьому класі
        this.#privatPropertyCat = 'This is a privat property for class Cat';
    }

    healthy(answer) {
        return console.log(`My veterinarian says: ${answer}`);
    }

    meow() {
        console.log(`${this.name} says: Meow!`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}
const myCat = new Cat("Tina", "Gray", "British Shorthair", "3");
myCat.healthy('yes'); // Виведе: My veterinarian says: yes
myCat.meow(); // Виведе: Tina says: Meow!
myCat.sleep(); // Виведе: Tina is sleeping.

// CLASS CAT ==> END


// CLASS APARTMENTS 
class Apartments extends CommonRules {
    #privatPropertyApartments;

    constructor(address, bedroomQuantity, wifi, kitchen, bathroom, parking, phoneNumber) {
        super(phoneNumber);
        this.address = address;
        this.bedroomQuantity = bedroomQuantity;
        this.wifi = wifi;
        this.kitchen = kitchen;
        this.bathroom = bathroom;
        this.parking = parking;
        this.phoneNumber = phoneNumber;

        // Приватна властивість в цьому класі
        this.#privatPropertyApartments = 'This is a privat property for class Apartments';
    }

    getAddress() {
        return this.address;
    }

    hasWifi() {
        return this.wifi ? "Yes" : "No";
    }

    hasParking() {
        return this.parking ? "Yes" : "No";
    }

    getApartmentInfo() {
        return {
            address: this.address,
            bedroomQuantity: this.bedroomQuantity,
            hasWifi: this.hasWifi(),
            hasKitchen: this.kitchen ? "Yes" : "No",
            hasBathroom: this.bathroom ? "Yes" : "No",
            hasParking: this.hasParking()
        };
    }
}
const myfriendApt = new Apartments("st.Dontsova 5, Lviv, Ukraine", "1", true, true, true, false, "+38(095)555-55-55");
console.log(myfriendApt.getApartmentInfo()); // Виведе об'єкт
console.log(myfriendApt.getPhoneNumber()); // Використовується загальний метод від класу CommonRules і виведе номер телефону

// CLASS APARTMENTS ==> END


// CLASS ORGANIZATION 
class Organization extends CommonRules {
    #privatPropertyOrganization;
    
    constructor(industries, headquartersRegions, foundedDate, founders, operatingStatus, lastFundingType, legalName, companyType, phoneNumber) {
        super(phoneNumber);
        this.industries = industries;
        this.headquartersRegions = headquartersRegions;
        this.foundedDate = foundedDate;
        this.founders = founders;
        this.operatingStatus = operatingStatus;
        this.lastFundingType = lastFundingType;
        this.legalName = legalName;
        this.companyType = companyType;
        this.phoneNumber = phoneNumber;

        // Приватна властивість в цьому класі
        this.#privatPropertyOrganization = 'This is a privat property for class Organization';
    }

    getIndustries() {
        return this.industries;
    }

    getFounders() {
        return this.founders;
    }

    isOperating() {
        return this.operatingStatus === "active";
    }

    getOrganizationInfo() {
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
    }
}

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
console.log(myOrganization.getOrganizationInfo()); // Виведе об'єкт
console.log(myOrganization.getPhoneNumber()); // Використовується загальний метод від класу CommonRules і виведе номер телефону

// CLASS ORGANIZATION ==> END
