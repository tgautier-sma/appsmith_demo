export default {
	myVar1: [],
	myVar2: {},
	mapData () {
		const demoData = [
  { id:1,category: "Monuments", lat: 48.858253035502344, lng: 2.294501875358415, title: "Paris Tour Eiffel", attributes: [], description: "" },
  { id:2,category: "Villes", lat: 51.507222, lng: -0.12755, title: "Londres", attributes: [], description: "" },
  { id:3,category: "Villes", lat: 55.7517, lng: 37.6178, title: "Moscou", attributes: [], description: "" },
  { id:4,category: "Villes", lat: 41.0128, lng: 28.9744, title: "Istanbul", attributes: [], description: "" },
  { id:5,category: "Villes", lat: 41.9, lng: 12.5, title: "Rome", attributes: [], description: "" },
  { id:6,category: "Villes", lat: 46.95, lng: 7.4458, title: "Bern", attributes: [], description: "" },
];
		return demoData;
	},
	mapSearchType(){
		// address, area, city, houseNUmber, street,postalCodePoint,postalCodePoint,addressBlock
		return [
			{label:"Adresse",value:"address"},
			{label:"Zone",value:"area"},
			{label:"Ville",value:"city"},
			{label:"Numéro de rue",value:"houseNUmber"},
			{label:"Rue",value:"street"},
			{label:"Code Postal",value:"postalCodePoint"},
			{label:"Adresse complete",value:"addressBlock"},
		]
	},
	
}