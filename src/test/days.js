import crudTest from './runner'

describe('Days', function () {
  crudTest({
    model: 'days',
    url: '/api/days/',
    postAttributes: {
      temp_lo: 32,
      temp_hi: 99,
      humidity: 77,
      pressure: 56,
      dew_point: 78
    },
    putAttributes: {
      temp_lo: 44,
      temp_hi: 100,
      humidity: 55,
      pressure: 54,
      dew_point: 80
    }
  })
})
