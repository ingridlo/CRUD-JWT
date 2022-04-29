const { Router } = require("express");
const router = Router();
const { pool } = require("../DB/config");


router.get("/read", async (req, res) => {
    let cliente = await pool.connect();   
    try {
      let result = await cliente.query(
        `SELECT * FROM usuarios`,
      );
      res.json(result.rows);
    } catch (err) {
      console.log({ err });
      res.status(500).json({ error: "Internal error server" });
    } finally {
        cliente.release(true);
    }
  });

module.exports = router;