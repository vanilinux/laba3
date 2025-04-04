function filterMultiples(numbers: number[], divisor: number): number[] {
    return numbers.filter(num => num % divisor === 0);
  }
  
  function joinStrings(strings: string[], separator: string): string {
    return strings.join(separator);
  }
  
  function sortByProperty<T>(arr: T[], prop: keyof T): T[] {
    return [...arr].sort((a, b) => {
      if (a[prop] < b[prop]) return -1;
      if (a[prop] > b[prop]) return 1;
      return 0;
    });
  }
  
  function withLogging<F extends (...args: any[]) => any>(func: F): (...args: Parameters<F>) => ReturnType<F> {
    return (...args: Parameters<F>): ReturnType<F> => {
      console.log(`Функция вызвана с параметрами: ${args.join(', ')}`);
      return func(...args);
    };
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const filtered = filterMultiples(numbers, 3);
  console.log('Числа кратные 3:', filtered);
  
  const strings = ['Hi', '^_^', '!!!!!'];
  const joined = joinStrings(strings, ' ');
  console.log('Соединенная строка с пробелами:', joined);
  
  interface Person {
    name: string;
    age: number;
  }
  
  const people: Person[] = [
    { name: 'A', age: 30 },
    { name: 'B', age: 25 },
    { name: 'C', age: 35 },
  ];
  
  const sortedByAge = sortByProperty(people, 'age');
  console.log('Отсортировано по возрастy', sortedByAge);
  
  const add = (a: number, b: number): number => a + b;
  const addWithLogging = withLogging(add);
  const result = addWithLogging(2, 3);
  console.log('Сумма 2 и 3 будет', result);