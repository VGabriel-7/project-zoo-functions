const { handlerElephants, getElephants, averageAge } = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função getElephants() retorna o objeto com o da especie elefante.', () => {
    const expected = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    };
    const actual = getElephants();
    expect(actual).toEqual(expected);
  });
  it('Testa se a função averageAge() retorna a média de idade dos elefantes.', () => {
    const expected = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    };
    const actual = averageAge(expected);
    expect(actual).toBe(10.5);
  });
  it('Testa se computedData("count") retorna qunatos elefantes tem no zoo.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se handlerElephants("name") retorna um array que contenha jeferson.)', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se handlerElephants("location") retorna a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se handlerElephants("popularity") retorna um número igual ou maior a 5.', () => {
    expect(handlerElephants('popularity') >= 5).toBeTruthy();
  });
  it('Testa se handlerElephants("availability") um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Testa se handlerElephants() retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se handlerElephants(0) retorna Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se handlerElephants("chaolinMatadorDePorco") retorna null', () => {
    expect(handlerElephants('chaolinMatadorDePorco')).toBeNull();
  });
  it('Testa se handlerElephants("averageAge") retorna null', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
