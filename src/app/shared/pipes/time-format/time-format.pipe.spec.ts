import { TimeFormatPipe } from './time-format.pipe';

describe('TimeFormatPipe', () => {
  const pipe = new TimeFormatPipe();

  it('transforms 90 minutes to "1h30"', () => {
    expect(pipe.transform(90)).toBe('1h30');
  });

  it('transforms 0 minutes to "0h00"', () => {
    expect(pipe.transform(0)).toBe('0h00');
  });

  it('handles negative inputs gracefully', () => {
    expect(pipe.transform(-5)).toBe('Invalid time');
  });

  it('handles null or undefined inputs gracefully', () => {
    expect(pipe.transform(null)).toBe('Invalid time');
    expect(pipe.transform(undefined)).toBe('Invalid time');
  });
});
