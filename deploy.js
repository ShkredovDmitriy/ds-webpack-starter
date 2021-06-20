var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
require("dotenv").config();

const user = process.env.FTP_DEPLOY_USER || "user";
const password = process.env.FTP_DEPLOY_PASSWORD || "password";
const host = process.env.FTP_DEPLOY_HOST || "host";
const port = process.env.FTP_DEPLOY_PORT || "port";
const remote_root = process.env.FTP_DEPLOY_REMOTE_ROOT || "/folder/subfolder/";

var config = {
  user: user,
  password: password,
  host: host,
  port: port,
  localRoot: __dirname + "/build",
  remoteRoot: remote_root,
  include: ["*"],
  exclude: ["*.map"],
  deleteRemote: false,
  forcePasv: false,
  sftp: false
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => console.log(err));
