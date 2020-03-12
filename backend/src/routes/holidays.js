const axios = require('axios')
    , moment = require('moment')

module.exports = (req, res) => {
    const endpoint = process.env.BANK_HOLIDAY_PUBLIC_URL
    axios.get(endpoint).then(result => {
      const bankHolidays = result.data
      let englandAndWalesHolidays = bankHolidays["england-and-wales"].events
      const now = moment().startOf('day')
      const remainingHolidays = []
      englandAndWalesHolidays.map((item)=>{
        const holidayDate = moment(item.date)
        if(now.isSameOrBefore(item.date)){
          remainingHolidays.push({
            title: item.title,
            date: holidayDate.format("dddd, Do MMMM YYYY")
          })
        }
      })
      res.send(remainingHolidays)
    }).catch(err => {
      console.error(err)
      res.status(500).send('Internal Error Occured')
    })
}