import { inputChecker } from "../src/client/js/inputCheck"


describe("Ensuring all 3 required fields have an entry", () => {

  test("Test only two entries provided returns false", () => {
      let city = 'London';
      let country = 'England';
      let date = '';
      expect(inputChecker(city,country,date)).toBe(false);
      });

  test("Test all 3 entries provided returns true", () => {
      let city = 'London';
      let country = 'England';
      let date = '2020-10-10';
      expect(inputChecker(city,country,date)).toBe(true);
      });

});
