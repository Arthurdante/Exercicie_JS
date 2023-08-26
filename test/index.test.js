const { describe, expect, it } = require('@jest/globals')
const { somar } = require('../exercicios/funcao.js')

describe('Testes do primeiro exercício', () => {
   
   it('Should sum two numbers', () => {
      const result = somar(1, 2)
      
      expect(result).toBe(3);
   })

})