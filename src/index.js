const { router, get } = require('microrouter')
const data = require('./data.json')
const ranges = require('./ranges.json')

const stringify = () => {

}

const grade = (req, res) => {
	const { grade, system } = req.query

	const start = Date.now()

	const isRange = grade && system && system in ranges && grade in ranges[system]

	let result = grade && system ? data[system][grade] : {}

	// if (isRange) {
	// 	const range = ranges[system][grade]
	// 	result = data[system][range]
	// } else {
		
	// }

	const end = Date.now()

	const spacing = 'pretty' in req.query ? 2 : 0

	return JSON.stringify({
		isRange,
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
	return JSON.stringify({ all: '' })
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