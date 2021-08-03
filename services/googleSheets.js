import axios from "axios";

const googleAPIKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const clientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT;

const googleSheetID = "1RlhCA__9h1ta1W60iTj1Kg3iC3tVp9kMRn0wk7dPj5c";
const googleSheetsApiUrl = "https://sheets.googleapis.com/v4/spreadsheets";

const flavorsUrl = `${googleSheetsApiUrl}/${googleSheetID}/values/Flavors?key=${googleAPIKey}&majorDimension=columns`;
const toppingsUrl = `${googleSheetsApiUrl}/${googleSheetID}/values/Toppings?key=${googleAPIKey}&majorDimension=columns`;
const pricingUrl = `${googleSheetsApiUrl}/${googleSheetID}/values/Pricing?key=${googleAPIKey}&majorDimension=rows`;
const sundaesUrl = `${googleSheetsApiUrl}/${googleSheetID}/values/Sundaes?key=${googleAPIKey}&majorDimension=columns`;
const shakesUrl = `${googleSheetsApiUrl}/${googleSheetID}/values/Shakes?key=${googleAPIKey}&majorDimension=rows`;

export const getMenu = async () => {
  try {
    const flavorsResponse = await axios.get(flavorsUrl);
    const flavors = flavorsResponse.data.values;

    const toppingsResponse = await axios.get(toppingsUrl);
    const toppings = toppingsResponse.data.values;

    const pricingResponse = await axios.get(pricingUrl);
    const pricing = pricingResponse.data.values;

    const sundaesResponse = await axios.get(sundaesUrl);
    const sundaes = sundaesResponse.data.values;

    const shakesResponse = await axios.get(shakesUrl);
    const shakes = shakesResponse.data.values;

    return {
      flavors: flavors,
      toppings: toppings,
      pricing: pricing,
      sundaes: sundaes,
      shakes: shakes,
    };
  } catch (error) {
    console.log(error);
  }
};
