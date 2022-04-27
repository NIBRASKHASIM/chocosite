/**
Select options object for state and city select elements and relationship
*/
const selectOptions = [
    {
        name: "Select",

    },

    {
        name: "Ernakulam",
        cities: [
            "Kochi",
            "Kaloor",
            "Aluva",
        ],
    },
    {
        name: "Palakkad",
        cities: [
            "Mannarkkad",
            "Malampuzha",
            "Ottappalam",
        ],
    },
    {
        name: "Calicut",
        cities: [
            "Feroke",
            "Mavoor",
            "Beypore",
        ],
    },
    {
        name: "Trivandrum",
        cities: [
            "Neyyattinkara",
            "Kovalam",
            "Nedumangad",
        ],
    },
    {
        name: "Malappuram",
        cities: [
            "Perinthalmanna",
            "Kottakkal",
            "Manjeri",
        ],
    },
    {
        name: "Kannur",
        cities: [
            "Thalassery",
            "Payyanur",
            "Mattannur",
        ],
    },
    {
        name: "Kottayam",
        cities: [
            "Pala",
            "Changanassery",
            "Kanjirappally",
        ],
    },

];


/**
Create an option element
@param {string} value - Option value
@return {Element} - option element
*/
function createOption(value) {
    const opt = document.createElement('option');
    const textNode = document.createTextNode(value);
    opt.appendChild(textNode);
    opt.value = value;
    return opt;
}

/**
Create options with Select
@param {string} selectId - parent of options
@param {array} options - arrays of options
*/
function createOptionsSelect(selectId, options) {
    const select = document.getElementById(selectId);

    // clear all previous options
    select.innerHTML = '';

    for(let i=0;i<options.length;i++) {
        select.appendChild(options[i]);
    }
}

/**
 * Retrieve state values from selectOptions
 * @return {array} state values
 */
function getSelectOptionsStates() {
    return selectOptions.map(value => value.name);
}

/**
 * Retrieve cities - values from selectOptions
 * @param {string} state - selected state
 * @return {array} - state cities
 */
function getSelectOptionsCities(state) {
    return selectOptions
            .filter(value => value.name===state)
            .map(val => val.cities)[0];
}

/**
 * Create select id=state with all the state options
 */
function createStateSelect() {
    const states = getSelectOptionsStates();
    const stateOptions = states.map(state => createOption(state));
    createOptionsSelect('state', stateOptions);
}

/**
 * Create select id=state with all the city options
 */
function createStateSelect() {
    const states = getSelectOptionsStates();
    const options = states.map(state => createOption(state));
    createOptionsSelect('state', options);
}

/**
 * Create select id=city with all the city options
 * @param {string} stateId - selected state Id
 */
function createCitySelect(stateId) {
    const cities = getSelectOptionsCities(stateId);
    const options = cities.map(city => createOption(city));
    createOptionsSelect('city', options);
}

/**
 * onChange event trigger for state select
 */
function onSelectState() {
    const selectedState = document.getElementById('state').value;
    createCitySelect(selectedState);
}

/**
 * onload callback
 */
function init() {
    // Default state select
    const selectedStateDefault = 'state1';

    // console.log(getSelectOptionsStates());
    // console.log(getSelectOptionsCities('state3'));

    document.getElementById('state').addEventListener('change', (e) => onSelectState(e), false);

    createStateSelect();
    createCitySelect(selectedStateDefault);
}

onload = init;
