

const usercreater = async (req, res) => {
  try {
    res.status(200).send("I am Harshit Shrivas Practicing Router.....");
  } catch (error) {
    console.log(error);
  }
};

const regester = (req, res) => {
  res.status(200).send("WellCome to the regestration Page Using Controlers...");
};

module.exports = { usercreater, regester };
