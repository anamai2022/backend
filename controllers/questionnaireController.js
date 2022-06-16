const express = require("express");
exports.getData = (req, res) => {
  res.status(200).json({ message: "getData" });
};
exports.searchById = (req, res) => {
  res.status(200).json({ message: "searchById" });
};
exports.searchByName = (req, res) => {
  res.status(200).json({ message: "searchByName" });
};
exports.createData = (req, res) => {
  res.status(200).json({ message: "createData" });
};
exports.editData = (req, res) => {
  res.status(200).json({ message: "editData" });
};
exports.updateData = (req, res) => {
  res.status(200).json({ message: "updateData" });
};
exports.deleteData = (req, res) => {
  res.status(200).json({ message: "deleteData" });
}
exports.questionnaireController = (req, res, next) => {};
