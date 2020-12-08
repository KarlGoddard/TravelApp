import { daysToDeparture } from "../src/client/js/DaysToDeparture"

describe("Calculating the days from today until the input date", () => {

  test("Testing an input date 2 days in the future returns 2", () => {
      let inputDate = new Date().setHours(0,0,0,0); // assigns today to variable
      inputDate.setDate(inputDate.getDate() + 2);//adds 2 days
      expect(daysToDeparture(inputDate)).toBe(2);
      });

  test("Testing an input date 8 days in the future returns 2", () => {
      let inputDate = new Date().setHours(0,0,0,0); // assigns today to variable
      inputDate.setDate(inputDate.getDate() + 8);//adds 8 days
      expect(daysToDeparture(inputDate)).toBe(8);
      });

});
