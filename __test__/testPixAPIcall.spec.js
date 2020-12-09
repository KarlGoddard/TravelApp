const picTest = require('../src/server/server');

describe("check the success of a call to the Pixabay image API", () => {

  test("Testing an valid city name returns status OK", () => {
      let picture = 'London'; // set bodyText
      const res = await picTest.post('/pix', picture); //call API
      expect(res.status).toBe(200);
      });

  test("Testing a unknown city returns API call not OK", () => {
      let picture = 'xxLondonyy';
      const res = await picTest.post('/pix', picture);
      expect(res.body.message).toBe('picture apicall not OK');
      });

});
