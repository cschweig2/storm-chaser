export default class NASAService {
  static async getNASA () {
    try {
      const response = await fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/severestorms?status=open&api_key=${process.env.API_KEY}`);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

