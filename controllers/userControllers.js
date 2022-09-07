var db = require("../dataBase/connection.js");

const bcrypt = require("bcryptjs");

const register = function (req, res) {
    var sql = "SELECT * FROM Users WHERE LOWER(userEmail) = LOWER(?)";

    db.query(sql, [req.body.userEmail], (err, result) => {
        if (err) {
            res.status(500).send(['errSQL', err]);
        } else {
            if (result.length) {
                res.status(200).send(["This user is already in use!"]);
            } else {
                const salt = bcrypt.genSaltSync();
                const hashedPassword = bcrypt.hashSync(req.body.userPassword, salt);
                var params = {
                    userfullName: req.body.userFullName,
                    userEmail: req.body.userEmail,
                    userPassword: hashedPassword,
                    userDateOfBirth: req.body.userDateOfBirth,
                    userPhone: req.body.userPhone,
                };
                db.query(`INSERT INTO Users Set ? `, params, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        login(req, res)
                    }
                });
            }
        }
    });
};

const login = (req, res) => {
    sql = "SELECT * FROM Users WHERE userEmail =?";
    db.query(sql, [req.body.userEmail], (err, result) => {
        // user does not exists
        if (err) {
            res.send(['errSQL', err]);
        } else {
            if (!result.length) {
                res.send(["Email is incorrect!"]);
            } else {
                bcrypt.compare(
                    req.body.userPassword,
                    result[0]["userPassword"],
                    (bErr, bResult) => {
                        // wrong password
                        if (bResult) {
                            res.send(['connected', result[0], bResult]);
                        } else {
                            res.send(["Password is incorrect!", bErr]);
                        }
                    }
                );
            }
        }
    });
};

const updateEmail = (req, res) => {
    var sql = "SELECT * FROM Users WHERE LOWER(userEmail) = LOWER(?)";
    db.query(sql, [req.body.newEmail], (err, result) => {
        if (err) {
            res.status(500).send(['errSQL', err]);
        } else {
            if (result.length) {
                res.status(200).send(["This user is already in use!"]);
            } else {
                db.query(`update Users set userEmail='${req.body.newEmail}'  where userId = ${req.params.userId}`, (err, result) => {
                    if (err) {
                        res.send(['errSQL', err])
                    } else {
                        if(result.affectedRows!=0)
                        res.send(['email updated',result])
                        else res.send (['unknown userId',result])
                    }
                })
            }
        }
    })
}

const updateFullName = (req, res) => {
    db.query(`update Users set userFullName='${req.body.newFullName}'  where userId = ${req.params.userId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if(result.affectedRows!=0)
            res.send(['Name updated',result])
            else res.send (['unknown userId',result])
        }
    })
}
const updatePhone = (req, res) => {
    db.query(`update users set userPhone = ${req.body.newPhone}  where userId = ${req.params.userId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if(result.affectedRows!=0)
            res.send(['phone updated',result])
            else res.send (['unknown userId',result])
        }
    })
}


const updatePassword = (req, res) => {
    if (req.body.current != req.body.newPassword) {
        sql = "SELECT * FROM Users WHERE userId =?";
        db.query(sql, [req.params.userId], (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result.length) {
                bcrypt.compare(
                    req.body.current,
                    result[0]["userPassword"], (bErr, bResult) => {
                        if(bErr)res.send(['errBCRYPT',bErr])
                        if (bResult) {
                            const salt = bcrypt.genSaltSync();
                            const hashedPassword = bcrypt.hashSync(req.body.newPassword, salt)
                            db.query(`update users set userPassword ='${hashedPassword}' where userId = ${req.params.userId} `, (error, results) => {
                                if (error) {
                                    res.send(['errSQL', error])
                                } else {
                                    res.send(['password updated', results, bResult])
                                }
                            })
                        } else {
                            res.send(['Current password incorrect', bResult])
                        }
                    })
            }else  res.send (['unknown userId',result])
        })
    }
    else {
        res.send(['The current password and the new password are the same'])
    }
}

const selectAllUsers = (req, res) => {
    db.query("select * from users", (err, result) => {
        if (err) {
            res.send(['errSQL',err]);
        } else {
            res.send(['all user',result]);
        }
    });
};
const insertSession = (req, res) => {
    var params = req.body;
    db.query("select * from session where userId=?", params, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (result.length > 0) {
          res.send("you are connected in an other device");
        } else {
          const sql = "INSERT INTO session Set ?";
          db.query(sql, params, (err, result) => {
            if (err) {
              console.log(err);
              res.send(err);
            } else {
              res.send("welcome");
            }
          });
        }
      }
    });
  };
  const deleteSession = (req, res) => {
    var params = req.params.userId;
    const sql = "DELETE FROM session WHERE userId=?";
    db.query(sql, params, (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };
  const selectSession = (req, res) => {
    var params = req.params.userId;
    const sql = "select * from user where userId=?";
    db.query(sql, params, (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };










module.exports = {
    selectAllUsers,
    login,
    register,
    updateEmail,
    updateFullName,
    updatePhone,
    updatePassword,
    selectSession,
    deleteSession,
    insertSession
}