export class Http {
  static instance = new Http();

  get = async (url: string) => {
    try {
      const req = await fetch(url);
      const json = await req.json();

      return json;
    } catch (err) {
      console.log('http get method', err);

      throw Error(err);
    }
  }
};
