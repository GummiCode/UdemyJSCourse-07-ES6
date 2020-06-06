
class PublicStructure {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  };
};

class Park extends PublicStructure {
  constructor (name, buildYear, parkArea, trees) {
    super(name, buildYear);
    this.parkArea = parkArea;
    this.trees = trees;
  };

  calculateTreeDensity () {
    return this.trees/this.parkArea;  
  };
};

class Road extends PublicStructure {
  constructor (name, buildYear, roadLength, size = 3) {
    super(name, buildYear);
    this.roadLength = roadLength;
    this.size = size;
  }
};

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allRoads = [new Road('Ocean Avenue', 1999, 1.1, 4),
                   new Road('Evergreen Street', 2008, 2.7, 2),
                   new Road('4th Street', 2015, 0.8),
                   new Road('Sunset Boulevard', 1982, 2.5, 5)];

let averageParkAge = 0;
for (const element of allParks) {averageParkAge += ((currentYear - element.buildYear)/3)};

let totalRoadsLength = 0;
for (const element of allRoads) {totalRoadsLength += element.roadLength};

const classifyRoad = (element) => {
    const roadClass = new Map ();
    roadClass.set(1, 'tiny');
    roadClass.set(2, 'small');
    roadClass.set(3, 'normal');
    roadClass.set(4, 'big');
    roadClass.set(5, 'huge');
    return (roadClass.get(element.size));
  };

console.log(` ----- PARKS REPORT -----
Our 3 parks have an average area of ${averageParkAge} km2.`);
allParks.forEach(element => console.log(`${element.name} has a tree density of ${element.trees/element.parkArea}.`)); 
console.log(`----- STREETS REPORT -----
Our 4 streets have a total length of ${totalRoadsLength}.`);
allRoads.forEach(element => console.log(`${element.name}, built in ${element.buildDate}, is a ${classifyRoad(element)} street.`));