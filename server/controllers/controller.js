const Model = require('../models/models');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'server/uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
});

const uploadImg = multer({storage:storage}).single('image');

const updateData = async (req, res) => {
    try {
        const data = await Model.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postData = async (req, res) => {
    try {       
       const data = await Model.findOne({name: req.body.name});
       if (!data) {
           const newData = new Model ({
               name: req.body.name,
               image: req.file.path,
               price: req.body.price,
               split: req.body.split,
               section: req.body.section
           })
           newData.save((err, data) => {
               if (err) return res.status(500).json({Error: err});
               return res.status(200).json(data);
           });
       }else {
           if (err) return res.status(500).json(err);
           return res.status(200).json({message: "Data already exists"});
       }
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getAllData = async (req, res) => {
    try {
        const data = await Model.find({});
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error)
    }
};

const deleteData = async (req, res) => {
    try {
        const data = await Model.deleteMany({});
        return res.status(200).json({message: "Complete delete successful"});
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneData = async (req, res) => {
    try {
        const data = await Model.find({name: RegExp(req.params.name,'i')});
        return res.status(200).json(data);    
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getFilter = async (req, res) => {
    try {
        const data = await Model.find({});
        if (req.params.section) {
            return res.status(200).json(Object.keys(data).map((i) => {
                if (data[i].section === req.params.section && 
                    data[i].price >= req.params.min && data[i].price <= req.params.max) return data[i]
            }).filter((value) => value != null));
        }
        return res.status(200).json(Object.keys(data).map((i) => {
            if (data[i].price >= req.params.min && data[i].price <= req.params.max) return data[i]
        }).filter((value) => value != null));
    } catch (error) {
        return  res.status(500).json(error)
    }
};

const deleteOneData = async (req, res) => {
    try {
        const data = await Model.deleteOne({name: req.params.name});
        if (data.deletedCount == 0) return res.json({message: "Data doesn't exist"});
        return res.status(200).json({message: "Data deleted"});
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = { uploadImg, updateData, postData, getAllData,
     deleteData, getOneData, getFilter, deleteOneData};