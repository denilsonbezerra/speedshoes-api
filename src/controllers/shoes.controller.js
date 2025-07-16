const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

async function postShoes(req, res) {
    const shoe = req.body

    try {
        const newShoe = await prisma.shoes.create({
            data: {
                id: shoe.id,
                name: shoe.name,
                brand: shoe.brand,
                imageUrl: shoe.imageUrl,
                price: shoe.price,
                size: shoe.size,
                color: shoe.color,
                inStock: shoe.inStock
            }
        })

        res.status(201).send(newShoe)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function getShoes(req, res) {
    try {
        const shoes = await prisma.shoes.findMany()

        res.send(shoes)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function updateShoes(req, res) {
    const id = req.params.id
    const shoe = req.body

    try {
        const updatedShoe = await prisma.shoes.update({
            where: {
                id: id
            },
            data: {
                name: shoe.name,
                brand: shoe.brand,
                imageUrl: shoe.imageUrl,
                price: shoe.price,
                size: shoe.size,
                color: shoe.color,
                inStock: shoe.inStock
            }
        })

        res.send(updatedShoe)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function deleteShoes(req, res) {
    const id = req.params.id

    try {
        const deletedShoe = await prisma.shoes.delete({
            where: {
                id: id
            }
        })

        res.send(deletedShoe)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    postShoes,
    getShoes,
    updateShoes,
    deleteShoes
}