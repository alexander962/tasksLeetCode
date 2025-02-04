// Given an integer x, return true if x is a
// palindrome
//   , and false otherwise.
//
//
//
//   Example 1:
//
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//   Example 2:
//
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//   Example 3:
//
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//
//
//   Constraints:
//
// -231 <= x <= 231 - 1

// решение за наименьшее колличество строк
const isPalindrome = (x) => (x+'').split('').join('') === (x+'').split('').reverse().join('');

// Проблемы решения isPalindrome:
//   Неэффективность по памяти: Создаются две строки (оригинальная и перевернутая), а также три массива (из-за split('') и join('')), что увеличивает потребление памяти.
//   Скорость выполнения: Использование строковых операций (split, reverse, join) делает алгоритм медленнее по сравнению с математическим подходом.
//   Избыточные преобразования: (x+'') выполняется дважды, что создает лишнюю строку.

// решение для получения наилучших результатов скорости выполнения и задействования памяти
const isPalindromeBest = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false; // Отрицательные и числа, оканчивающиеся на 0, кроме 0, не палиндромы
  let reversed = 0;
  let original = x;
  while (original > reversed) {
    reversed = reversed * 10 + original % 10;
    original = Math.floor(original / 10);
  }
  return original === reversed || original === Math.floor(reversed / 10);
};

// Преимущества оптимизированного решения:
// ✅ Лучшее использование памяти – не создаются строки и массивы.
// ✅ Более высокая скорость – выполняется O(log₁₀(n)) операций вместо O(n).
// ✅ Минимальные вычисления – разворачиваем только половину числа, а не всё.

console.log(isPalindrome(1231)); // false
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(121));  // true
console.log(isPalindrome(10));   // false
console.log(isPalindrome(-121)); // false