const redisClient = require('../../../redisClient')
const User = require('../../../models/user')

exports.getAll = async (req, res, next) => {
  try {
    let users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next (err)
  }
}

exports.getById = async (req, res, next) => {
  let { id } = req.params

  try {
    let user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    next (err)
  }
}

exports.update = async (req, res, next) => {
  // TODO: Validate this with Celebrate
  delete req.body.password
  delete req.body.email
  delete req.body.username

  let { id } = req.params

  try {
    let user = await User.findById(id)
    user = Object.assign(user, req.body)
    await user.save()
    res.status(200).json(user)
  } catch (err) {
    next (err)
  }

}