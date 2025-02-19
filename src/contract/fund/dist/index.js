"use strict";
exports.__esModule = true;
var web3_1 = require("../../utils/web3");
var abi_prod_1 = require("./abi-prod");
var abi_test_1 = require("./abi-test");
var appConfig_1 = require("../../config/appConfig");
var abis = appConfig_1.env == appConfig_1.EnvEnum.test ? abi_test_1["default"] : abi_prod_1["default"];
var contract = new web3_1["default"].eth.Contract(abis);
contract.options.address = appConfig_1.fundContractAddr;
contract.defaultAccount = web3_1["default"].eth.defaultAccount;
exports["default"] = contract;
