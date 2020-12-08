import { daysToDeparture } from '../src/client/js/daysToDeparture'


describe("Calculating the days from today until the input date", () => {

  test("Testing an input date 2 days in the future returns 2", () => {
      let inputDate = new Date().setHours(0,0,0,0); // assigns today to variable
      inputDate.setDate(inputDate.getDate() + 2);
      const scoreLetter = 'P+';
      expect(daysToDeparture(inputDate)).toBe(2);
      });

  test("Testing an input date 8 days in the future returns 2", () => {
      let inputDate = new Date().setHours(0,0,0,0); // assigns today to variable
      inputDate.setDate(inputDate.getDate() + 8);
      const scoreLetter = 'P+';
      expect(daysToDeparture(inputDate)).toBe(8);
      });

});
