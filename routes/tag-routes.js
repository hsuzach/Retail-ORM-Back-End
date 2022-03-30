const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: [Product]})
  .then(tags => {
    res.json(tags)
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/tags/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({ where: {id: req.params.id}, include: [Product]})
  .then(tag => {
    res.json(tag)
  })
  .catch(err => {
    console.log(err)
  })
})

router.post('/tags', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(newTag => {
    res.json(newTag)
  })
  .catch(err => {
    console.log(err)
  })
})

router.put('/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: {id: req.params.id}})
  .then(category => {
    res.sendStatus(200)
    console.log("Tag Successfully Updated")
  })
  .catch(err => {
    console.log(err)
  })
})

router.delete('/tags/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: {id: req.params.id}})
  .then(deletedTag => {
    res.sendStatus(200)
    console.log("Tag Successfully Removed")
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router
