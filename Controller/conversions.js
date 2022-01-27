const { v4: uuidv4 } = require("uuid");
const { convert } = require("../Conversions");

let id = uuidv4();
let Conversions = [];

const getConversions = (req, res) => {
  res.json(Conversions);
};

const createConversion = async (req, res) => {
  const conversion = await convert(
    req.body.amount,
    req.body.fromCurrency.toUpperCase(),
    req.body.toCurrency.toUpperCase()
  );
  const newConversion = await { id: id, ...req.body, conversion: conversion };
  Conversions.push(newConversion);
  res.status(201).json(newConversion);
  id = uuidv4();
};

const getConversionById = (req, res) => {
  let conversions = Conversions.filter((item) => item.id == req.params.id);
  res.json(conversions);
};

module.exports = { getConversions, createConversion, getConversionById };
