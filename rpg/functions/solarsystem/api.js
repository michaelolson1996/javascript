const axios = require('axios');

async function getPlanets() {
  try {
    const stars = await axios.get('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=missionstars&where=st_ppnum>0&format=json');
    const planets = await axios.get(`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,st_umbj,pl_discmethod,swasp_id,pl_dens,st_age,pl_disc,pl_mnum,pl_edelink,st_dist,ra,pl_rade,dec,pl_orbper,pl_bmassj,st_optmag,pl_eqt,pl_masse,st_teff,pl_radj&where=pl_edelink is not null&order=dec&format=json`);
    return {planets: planets.data.slice(0, 120), stars: stars.data.slice(0, 50)};
  }
  catch(err) {
    console.log(err);
  };
};

module.exports = getPlanets;