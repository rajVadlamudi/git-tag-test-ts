import {Greet} from '../src/index.ts'
  
  describe('greet function', () => {
    it('should return messagr', () => {
      expect(Greet()).toBe('Hello its git tag test ts repo v1.0.3');
    });
  });