import sortHeroesByHealth from '../sortHeroes';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    
    const result = sortHeroesByHealth(heroes);
    
    // toBe не сработает, потому что сравнивает ссылки на объекты
    // expect(result).toBe(expected); // Это не сработает!
    
    // toEqual работает, потому что сравнивает значения (глубокое равенство)
    expect(result).toEqual(expected);
    
    // Проверяем, что оригинальный массив не изменился
    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });
  
  test('should handle empty array', () => {
    const heroes = [];
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual([]);
  });
  
  test('should handle array with one hero', () => {
    const heroes = [{ name: 'мечник', health: 10 }];
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual([{ name: 'мечник', health: 10 }]);
  });
  
  test('should handle heroes with same health', () => {
    const heroes = [
      { name: 'мечник', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
    ];
    
    const result = sortHeroesByHealth(heroes);
    
    // Порядок героев с одинаковым здоровьем может быть любым
    // Но все элементы должны присутствовать
    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining([
      { name: 'мечник', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
    ]));
  });
  
  test('should throw error for non-array input', () => {
    expect(() => sortHeroesByHealth(null)).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth(undefined)).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth({})).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth('string')).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth(123)).toThrow('Input must be an array');
  });
  
  test('should not mutate original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];
    
    const original = [...heroes];
    sortHeroesByHealth(heroes);
    
    expect(heroes).toEqual(original);
  });
  
  test('should handle negative health values', () => {
    const heroes = [
      { name: 'мечник', health: -10 },
      { name: 'маг', health: -5 },
      { name: 'лучник', health: -15 },
    ];
    
    const expected = [
      { name: 'маг', health: -5 },
      { name: 'мечник', health: -10 },
      { name: 'лучник', health: -15 },
    ];
    
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });
  
  test('should handle zero health', () => {
    const heroes = [
      { name: 'мечник', health: 0 },
      { name: 'маг', health: 0 },
    ];
    
    const result = sortHeroesByHealth(heroes);
    expect(result).toHaveLength(2);
    expect(result[0].health).toBe(0);
    expect(result[1].health).toBe(0);
  });
});
