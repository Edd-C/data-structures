let hash = function stringHash(str) {
  var hash = 5381,
      i = str.length;

  while( i ) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}




class DumbMap {
  constructor() {
    this.list = []
  }

  get(x) {
    let i = hash(x)

    if (!this.list[i]) {
      return undefined
    }

    let result

    this.list[i].forEach(pairs => {
      if (pairs[0] === x) {
        result = pairs[1]
      }
    })

    return result
  }

  set(x, y) {
    let i = hash(x)

    if (!this.list[i]) {
      this.list[i] = []
    }

    this.list[i].push([x, y])
  }
}


let m = new DumbMap()
m.set('x', 1)
m.set('y', 2)

console.time('with very few records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with very few records in the map')

m = new DumbMap()

console.time('insert records 10,000,000 records.')
for (x = 0; x < 1000; x++) {
  m.set('element${x}', x)
}
console.timeEnd('insert records 10,000,000 records.')

console.time('with lots of records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with lots of records in the map')

console.time('with lots of records in the map')
console.log( m.get('element10000') )
console.timeEnd('with lots of records in the map')

console.log( m );