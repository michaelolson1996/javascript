const retrieveStellarData = require('./api')

async function createSolarSystem() {
  try {
    const solarSystemArr = [];
    const stellarData = await retrieveStellarData()
    const stars = stellarData.stars
    const planets = stellarData.planets

    for (let i = 0; i < 50; i++) {

      const solarSystemPlanets = planets.slice(0, stars[i].st_ppnum);
      const planetsArr = [];

      for (let i = 0; i < solarSystemPlanets.length; i++) {
        const solarSystemPlanet = {
          name: solarSystemPlanets[i].pl_hostname,
          distance: solarSystemPlanets[i].st_dist,
          mass: solarSystemPlanets[i].pl_bmassj,
          orbits: solarSystemPlanets[i].pl_orbper,
          temperature: solarSystemPlanets[i].st_teff,
          moons: []
        };
        planetsArr.push(solarSystemPlanet);
      };

      solarSystem = {
        data: {
          name: stars[i].tm_name,
          visibility: stars[i].st_rvflag,
          planetCount: stars[i].st_ppnum,
          asteroidCount: ''
        },
        star: {
          name: stars[i].star_name,
          brightness: stars[i].st_vmag,
          intensity: stars[i].st_lbol,
          type: stars[i].st_spttype
        },
        planets: planetsArr
      };

      solarSystemArr.push(solarSystem);
    };

    return solarSystemArr;
  }
  catch(err) {
    console.log(err);
  };
};

module.exports = createSolarSystem