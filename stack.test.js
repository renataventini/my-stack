const stack = require('./stack');

beforeEach(() => {
    s = new stack();
});

test('Testar pilha vazia na criação', () => {
    expect(s.isEmpty()).toEqual(true);
});

test('Testar pilha não vazia', () => {
    s.push(5);
    expect(s.isEmpty()).toEqual(false);
});

test('Testar pilha vazia após inserir e remover um elemento', () => {
    s.push(5);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Verificar tamanho correto da pilha', () => {
    s.push(5);
    s.push(30);
    s.push(50);
    expect(s.size()).toBe(3);
});

test('Testar remover elemento de pilha vazia', () => {
    s.push(5);
    s.pop();
    expect(() => {s.pop()}).toThrow();
});

test('Testar se aceita um valor vazio', () => {
    s.push('')
    expect(s.size()).toBe(1);

  });

  test('Testar inserir elemento, remover e inserir de novo.' , ()  =>  {
    s.push(8);
    s.pop();
    s.push(9);
    expect(s.isEmpty()).toEqual(false);
});


test('Testar inserir 2 elementos e remover 1', () => {
    s.push(4);
    s.push(18);
    s.pop();
    expect(s.isEmpty()).toEqual(false);

    });

test('Testar se aceita um valor negativo', () => {
    s.push(-5);
    expect(s.size()).toBe(1);
  
});

test('Testar tamanho da pilha depois de inserir elementos e remover', () => {
    s.push(60);
    s.push(25);
    s.push(40);
    s.pop();
    expect(s.size()).toBe(2);
});

test('Testar inserir valor boleano', () => {
    s.push(5.5);
    expect(s.size()).toBe(1);
});

test('Testar inserir o tamanho da pilha e remover', ()  => {
    s.push(5);
    s.push(25)
    s.push(50);
    s.pop();
    expect(s.size).toThrow();

    });

    test('Testar pilha vazia inserir elemento,remover,inserir e remover', () => {
        s.push(25);
        s.pop();
        s.push(50);
        s.pop();
        expect(s.isEmpty()).toEqual(true);
        });

        
        