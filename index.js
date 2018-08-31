const ircra = require('ircra')

module.exports = (req, res) => {
	if ('grade' in req.query && 'system' in req.query) {
		let specific 

		if ('desired' in req.query) {
			specific = req.query.desired
		}

		const grade = ircra(req.query.grade, req.query.system)

		return grade
	} else {
		return 'grade and system required'
	}
}
