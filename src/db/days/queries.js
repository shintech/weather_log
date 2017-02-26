import {init as db} from '../'

function getAlldays (req, res, next) {
  db.any('select * from days')
  .then(function (data) {
    res.status(200)
    .json(data)
  })
  .catch(function (err) {
    return next(err)
  })
}

function createday (req, res, next) {
  db.none('insert into days( temp_lo, temp_hi, humidity, pressure, dew_point )' + 'values( ${temp_lo}, ${temp_hi}, ${humidity}, ${pressure}, ${dew_point} )', req.body) // eslint-disable-line
  .then(function () {
    res.status(200)
    .json({
      status: 'success',
      message: 'Inserted one day...'
    })
  })
  .catch(function (err) {
    return next(err)
  })
}

function getSingleday (req, res, next) {
  const dayID = parseInt(req.params.id)
  db.one('select * from days where id = $1', dayID)
  .then(function (data) {
    res.status(200)
    .json(data)
  })
  .catch(function (err) {
    return next(err)
  })
}

function updateSingleday (req, res, next) {
  const dayID = parseInt(req.params.id)
  db.none('update days set temp_lo=$1, temp_hi=$2, humidity=$3, pressure=$4, dew_point=$5 where id=$6', [req.body.temp_lo, req.body.temp_hi, req.body.humidity, req.body.pressure, req.body.dew_point, dayID])
  .then(function (done) {
    res.status(200)
    .json({
      status: 'success',
      message: 'Updated one day...'
    })
  })
  .catch(function (err) {
    return next(err)
  })
}

function removeday (req, res, next) {
  var dayID = parseInt(req.params.id)
  db.result('delete from days where id = $1', dayID)
  .then(function (data) {
    res.status(200)
    .json({
      status: 'success',
      message: `Removed ${data.rowCount} day`
    })
  })
  .catch(function (err) {
    return next(err)
  })
}

export default {
  getAlldays,
  createday,
  getSingleday,
  updateSingleday,
  removeday
}
