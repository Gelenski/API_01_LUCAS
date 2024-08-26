const cors = require("cors");
const express = require("express");
const mysql = require("mysql2");

const functions = require("./inc/functions");
const mysql_config = require("./inc/mysql_config");

const api = express();
