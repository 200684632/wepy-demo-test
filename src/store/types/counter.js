export const INCREMENT = 'INCREMENT'

export const DECREMENT = 'DECREMENT'

export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'

// export const TEST = 'TEST'

export const TEST = function (txt) {
  return {
    type:TEST,
    name:txt
  }
}
