const teamService = require('../service/team.service')

const listAll = async (req, res) => {
  const item = await teamService.listAll()
  res.send(item)
}

const save = async (req, res) => {
  const item = await teamService.save(req.body)
  res.send(item)
}

const update = async (req, res) => {
  const item = await teamService.update(req.params.id, req.body)
  res.send(item)
}

const remove = async (req, res) => {
  await teamService.remove(req.params.id)
  res.send('Item removed with successful!') 
}

module.exports = {
  listAll,
  save,
  update,
  remove
}