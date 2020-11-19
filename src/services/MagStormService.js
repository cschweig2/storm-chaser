export default class MagStormService {
  static async getMagStorm (startDate, endDate) {
    try {
      const magStormResponse = await fetch (`https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=${process.envabort.API_KEY}`);
      if(!magStormResponse.ok) {
        throw Error(magStormResponse.statusText);
      }
      return magStormResponse.json();
    } catch(error) {
      return error.message;
    }
  }
}