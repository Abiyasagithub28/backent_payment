module.exports = {
    getPayment: (req, res) => {
      res.json({
        status: 200,
        message: "Berhasil tampilkan data",
      });
    },putPayment: (req, res) => {
        res.json({
            status: 200,
            message: "berhasil update data"
        });
    },postPayment: (req, res) => {
        res.json({
            status: 200,
            message: "berhasil simpan data"
        });
    },deletePayment: (req, res) => {
        res.json({
            status: 200,
            message: "berhasil hapus data"
        });
    },
  };
  