const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se não passando argumentos retorna um objeto com todos os dias e horas', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Testa se passando os argumentos Monday e 09:00-AM retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se passando os argumentos Tuesday e 09:00-AM retorna a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa se passando os argumentos Wednesday e 09:00-PM retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se passando os argumentos Thu e 09:00-AM retorna a string The zoo is closed', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(Error('The day must be valid. Example: Monday'));
  });
  it('Testa se passando os argumentos Friday e 09:00-ZM retorna a string The zoo is closed', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Testa se passando os argumentos Saturday e C9:00-AM retorna a string The zoo is closed', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error('The hour should represent a number'));
  });
  it('Testa se passando os argumentos Sunday e 09:c0-AM retorna a string The zoo is closed', () => {
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow(Error('The minutes should represent a number'));
  });
  it('Testa se passando os argumentos Monday e 13:00-AM retorna a string The zoo is closed', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(Error('The hour must be between 0 and 12'));
  });
  it('Testa se passando os argumentos Monday e 09:60-AM retorna a string The zoo is closed', () => {
    expect(() => getOpeningHours('Monday', '09:60-AM')).toThrow(Error('The minutes must be between 0 and 59'));
  });
});
