const expenses = {
  '2023-01': {
    '01': {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    '09': {
      food: [11.9],
      fuel: [190.22],
    },
  },
  '2023-03': {
    '07': {
      food: [20, 11.9, 30.2, 11.9],
    },
    '04': {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  '2023-04': {},
};

function get_median_of_first_week_expenses(expenses) {
  try {
    const expensesBeforeFirstSunday = [];

    for (const month in expenses) {
      const firstDayOfMonth = new Date(`${month}-01`);
      const firstSunday = new Date(
        firstDayOfMonth.getFullYear(),
        firstDayOfMonth.getMonth(),
        7
      );

      for (const day in expenses[month]) {
        const date = new Date(`${month}-${day}`);
        if (date <= firstSunday) {
          for (const category in expenses[month][day]) {
            expensesBeforeFirstSunday.push(...expenses[month][day][category]);
          }
        }
      }
    }

    if (expensesBeforeFirstSunday.length === 0) {
      throw new Error('No expenses found');
    }

    const sortedArray = expensesBeforeFirstSunday.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);

    return sortedArray.length % 2 !== 0
      ? sortedArray[mid]
      : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
}

console.log(get_median_of_first_week_expenses(expenses));
