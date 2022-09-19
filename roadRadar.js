function roadRadar(killometers, zone) {
  if (zone === 'city') {
    let limmit = 50;
    if (killometers > limmit) {
      let difference = killometers - limmit;
      if (difference <= 20) {
        let status = 'speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 20 && difference <= 40) {
        let status = 'excessive speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 40) {
        let status = 'reckless driving';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      }
    } else {
      console.log(`Driving ${killometers} km/h in a ${limmit} zone`);
    }
  } else if (zone === 'motorway') {
    let limmit = 130;
    if (killometers > limmit) {
      let difference = killometers - limmit;
      if (difference <= 20) {
        let status = 'speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 20 && difference <= 40) {
        let status = 'excessive speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 40) {
        let status = 'reckless driving';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      }
    } else {
      console.log(`Driving ${killometers} km/h in a ${limmit} zone`);
    }
  } else if (zone === 'interstate') {
    let limmit = 90;
    if (killometers > limmit) {
      let difference = killometers - limmit;
      if (difference <= 20) {
        let status = 'speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 20 && difference <= 40) {
        let status = 'excessive speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 40) {
        let status = 'reckless driving';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      }
    } else {
      console.log(`Driving ${killometers} km/h in a ${limmit} zone`);
    }
  } else if (zone === 'residential') {
    let limmit = 20;
    if (killometers > limmit) {
      let difference = killometers - limmit;
      if (difference <= 20) {
        let status = 'speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 20 && difference <= 40) {
        let status = 'excessive speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      } else if (difference > 40) {
        let status = 'reckless driving';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limmit} - ${status}`);
      }
    } else {
      console.log(`Driving ${killometers} km/h in a ${limmit} zone`);
    }
  }
}
roadRadar(120, 'interstate')