const koneksi = mysql.createConecction({
  host: "localhost",
  user: "user",
  password: "",
  database: "",
});

koneksi.connect(function (err) {
  !err
    ? console.log("berhasil koneksi database")
    : console.log("gagal terhubung database");
});

module.exports = koneksi;
