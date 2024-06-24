/**
 * Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil
 *  dengan manual tanpa fungsi bawaan javascript,
 */

export const sortAsc = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const newArr: number[] = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      // Check if the next number is smaller, if smaller then swap place
      if (newArr[j] < newArr[i]) {
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
};

export const sortDesc = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const newArr: number[] = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      // Check if the next number is smaller, if smaller then swap place
      if (newArr[j] > newArr[i]) {
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
};
