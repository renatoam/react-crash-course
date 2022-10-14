const summaryDatabase = {
  summary: require('../model/summary.json'),
  setSummary: function (data) { this.summary = data }
}

class SummaryController {
  async run(_, response) {
    const summary = summaryDatabase.summary

    if (!summary || !summary.length) {
      return response.status(200).json({
        summary: [],
        message: 'There is still no data for this resource.'
      })
    }

    return response.status(200).json({ summary })
  }
}

module.exports = SummaryController
