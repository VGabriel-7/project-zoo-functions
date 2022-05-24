const { handlerElephants } = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
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
