import library from "../models/books.js";

const saveBook = async (req, res) =>{
    if (!req.body.name || !req.body.description)
    return res.status(406).send("Incomplete data");
    
    const bookInStock = await library.findOne({ name: req.body.name});
    if (bookInStock) return res.status(406).send("The book already exist");

    const bookSchema = new library ({
        name: req.body.name,
        description:req.body.description,
        dbStatus: true,
    });
    const result = await bookSchema.save();
    if (!result) return res.status(400).send("Failed to register book");

    res.status(200).send({ result });

};
export default { saveBook };
