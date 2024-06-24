/**
 * 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap
 * sama dengan string yang diinputkan maka return true jika tidak return false
 */

export const isPalindrome = (str: string): boolean => {
  // Remove impurities from string and make sure that string only contains letters and in lowercase
  const clean = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Since there's no rule that specifies built in function is prohibited, I use reverse and join
  // Split the clean string to turn it into array and then reverse the array and use join to turn the array back into string
  const reversed = clean.split("").reverse().join("");

  return clean === reversed;
};
