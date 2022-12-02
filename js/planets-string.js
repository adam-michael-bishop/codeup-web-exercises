(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let newPlanetsString = planetsArray.join("<br>");
    console.log(newPlanetsString);

    let planetsList = `<ul><li>${planetsArray.join("</li><li>")}</li></ul>`;
    console.log(planetsList);

    const template = document.createElement('div');
    template.innerHTML = planetsList + newPlanetsString;
    document.body.appendChild(template);
})();