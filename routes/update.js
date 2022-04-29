const { Router } = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const router = Router();
const { pool } = require("../DB/config");

router.patch("/update/:id", async (req, res) => {
  let cliente = await pool.connect();
  try {
    const { id } = req.params;   
    const {nombre_usuario, password} = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);     
    const actualizar = await cliente.query(
      `UPDATE usuarios SET nombre_usuario = $1, password = $2 WHERE id = $3;`,[nombre_usuario, hash,id]
    );
    res.status(200).json('actualizar');
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  } finally {
    cliente.release(true);
  }
});


module.exports = router;