import validator from "validator";

const defaultCors = {
  origin: "*",
  methods: "GET,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const validateFields = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  if (validator.isEmpty(name)) {
    res.status(401).send({ message: "No empty values" });
  } else if (!validator.isEmail(email)) {
    res.status(401).send({ message: "The email doesn't follow the pattern" });
  } else {
    next();
  }
};

export { defaultCors, validateFields };
