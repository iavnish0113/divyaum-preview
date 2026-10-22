/* Daily Panchang — computed in the browser with Astronomy Engine (MIT).
   Tithi, paksha, nakshatra and yoga at sunrise, with end times; sunrise, sunset and Rahu Kaal.
   Sidereal positions use the Lahiri ayanamsa. Default place: New Delhi. */
(function (root) {
  var A = root.Astronomy || (typeof require !== "undefined" ? require("astronomy-engine") : null);
  var TITHI = ["Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima"];
  var NAK = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
  var YOGA = ["Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"];
  var VAAR = ["Ravivar", "Somvar", "Mangalvar", "Budhvar", "Guruvar", "Shukravar", "Shanivar"];
  var RAHU = [8, 2, 7, 5, 6, 4, 3]; /* 1-based eighth of the day, Sunday first */

  function norm(x) { x %= 360; return x < 0 ? x + 360 : x; }
  function ayanamsa(d) { var y = (d - Date.UTC(2000, 0, 1, 12)) / 31557600000; return 23.85709 + 0.01396971 * y; }
  function sun(d) { return A.SunPosition(d).elon; }
  function moon(d) { return A.EclipticGeoMoon(d).lon; }
  function tithiAngle(d) { return norm(moon(d) - sun(d)); }
  function nakAngle(d) { return norm(moon(d) - ayanamsa(d)); }
  function yogaAngle(d) { var a = ayanamsa(d); return norm(sun(d) - a + moon(d) - a); }

  /* time when f(t) crosses `target` (degrees, increasing) after t0, within `hours` */
  function crossing(f, target, t0, hours) {
    var lo = t0.getTime(), hi = lo + hours * 3600000, step = 3600000, prev = norm(f(new Date(lo)) - target);
    for (var t = lo + step; t <= hi; t += step) {
      var cur = norm(f(new Date(t)) - target);
      if (cur < prev && prev > 180) { /* wrapped through target */
        var a = t - step, b = t;
        for (var k = 0; k < 30; k++) { var m = (a + b) / 2; if (norm(f(new Date(m)) - target) > 180) a = m; else b = m; }
        return new Date(b);
      }
      prev = cur;
    }
    return null;
  }

  function compute(date, lat, lon) {
    lat = lat == null ? 28.6139 : lat; lon = lon == null ? 77.2090 : lon;
    var obs = new A.Observer(lat, lon, 216);
    /* local midnight in IST */
    var ist = new Date(date.getTime() + 5.5 * 3600000);
    var mid = new Date(Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate()) - 5.5 * 3600000);
    var rise = A.SearchRiseSet(A.Body.Sun, obs, +1, mid, 1).date;
    var set = A.SearchRiseSet(A.Body.Sun, obs, -1, rise, 1).date;
    var ta = tithiAngle(rise), ti = Math.floor(ta / 12);
    var na = nakAngle(rise), ni = Math.floor(na / (360 / 27));
    var ya = yogaAngle(rise), yi = Math.floor(ya / (360 / 27));
    var tEnd = crossing(tithiAngle, ((ti + 1) * 12) % 360, rise, 36);
    var nEnd = crossing(nakAngle, ((ni + 1) * 360 / 27) % 360, rise, 36);
    var yEnd = crossing(yogaAngle, ((yi + 1) * 360 / 27) % 360, rise, 36);
    var wd = new Date(mid.getTime() + 5.5 * 3600000).getUTCDay();
    var part = (set - rise) / 8, rs = new Date(rise.getTime() + (RAHU[wd] - 1) * part);
    var shukla = ti < 15;
    return {
      date: mid, vaar: VAAR[wd], sunrise: rise, sunset: set,
      tithi: (ti === 29 ? "Amavasya" : TITHI[ti % 15]), tithiEnd: tEnd, paksha: shukla ? "Shukla Paksha" : "Krishna Paksha",
      nakshatra: NAK[ni], nakshatraEnd: nEnd, yoga: YOGA[yi], yogaEnd: yEnd,
      rahuStart: rs, rahuEnd: new Date(rs.getTime() + part)
    };
  }

  var api = { compute: compute };
  if (typeof module !== "undefined") module.exports = api; else root.Panchang = api;
})(typeof window !== "undefined" ? window : globalThis);
