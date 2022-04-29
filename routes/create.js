const { Router } = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const router = Router();
const { pool } = require("../DB/config");


router.post("/create", async (req, res) => {
  let cliente = await pool.connect();
  try {
    const { nombre_usuario,password} = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    let result = await cliente.query(
      `INSERT INTO usuarios (${Object.keys(req.body).join()})
    VALUES($1,$2);`,[nombre_usuario,hash]
    );
    res.json(result);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  } finally {
    cliente.release(true);
  }
});

module.exports = router;