const { router, get } = require('microrouter')
const data = require('./data.json')

const grade = (req, res) => {
	const { grade, system } = req.query

	const start = Date.now()
	let result = grade && system ? data[system][grade] : {}
	const end = Date.now()

	const spacing = 'pretty' in req.query ? 2 : 0

	return JSON.stringify({
		result,
		meta: {
			request_start: start,
			request_end: end,
			requested: {
				grade,
				system
			}
		}
	}, null, spacing)
}

const all = (req, res) => {
	return JSON.stringify({ result: data })
}

const system = (req, res) => {
	const spacing = 'pretty' in req.query ? 2 : 0
	return JSON.stringify(data[req.params.system], null, spacing)
}

module.exports = router(
	get('/all', all),
	get('/', grade),
	get('/system/:system', system)
)