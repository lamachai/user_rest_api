import { User } from "./User.model.js"

//get All users
const getAllUsers = (req, res)=>{
    
    User.findAll().then((data)=>{
        res.setHeader("Content-Type", "application/json")
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(404).send({error: err, message: "Failed to retrieve data"})
    })
}


//get a user by id
const getUserById = async (req, res)=>{
    const id = req.params.id
    await User.findOne({where: {id: id}}).then((user)=>{
        res.status(200).send({user: user, message: "Success"})
    }).catch((err)=>{
        res.status(404).send({error: err, message: "Failed to retrieve data"})
    });

}

//create a new user
const createUser =  async (req,res)=>{

    const name = req.body.name
    const email = req.body.email

    await User.create({name: name, email:email}).then((user)=>{
        console.log(user);
        res.status(201).send({user: user, message: "Created."});
    }).catch((err)=>{
        res.status(400).send({error: err, message: "Failed creation"})
    })

    
}

//update user
const updateUser = async (req, res)=>{
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    await User.update({name: name, email:email}, {where:{id: id}}).then((user)=>{
        res.status(201).send({message: "Success"})
    }).catch((err)=>{
        res.status(400).send({error: err, message: "Failed update"})
    })
}

//Delete user
const deleteUser = async (req, res)=>{
    const id = req.params.id
    await User.destroy({where: {id: id}}).then((user)=>{
        res.status(200).send({message: "delected"})
    }).catch((err)=>{
        res.status(400).send({error: err, message: "Failed to delete"})
    })
}


export { getAllUsers, getUserById, createUser, updateUser, deleteUser }