/* */ 
"use strict";
var async_pipe_1 = require('./async_pipe');
var uppercase_pipe_1 = require('./uppercase_pipe');
var lowercase_pipe_1 = require('./lowercase_pipe');
var json_pipe_1 = require('./json_pipe');
var slice_pipe_1 = require('./slice_pipe');
var date_pipe_1 = require('./date_pipe');
var number_pipe_1 = require('./number_pipe');
var replace_pipe_1 = require('./replace_pipe');
var i18n_plural_pipe_1 = require('./i18n_plural_pipe');
var i18n_select_pipe_1 = require('./i18n_select_pipe');
exports.COMMON_PIPES = [async_pipe_1.AsyncPipe, uppercase_pipe_1.UpperCasePipe, lowercase_pipe_1.LowerCasePipe, json_pipe_1.JsonPipe, slice_pipe_1.SlicePipe, number_pipe_1.DecimalPipe, number_pipe_1.PercentPipe, number_pipe_1.CurrencyPipe, date_pipe_1.DatePipe, replace_pipe_1.ReplacePipe, i18n_plural_pipe_1.I18nPluralPipe, i18n_select_pipe_1.I18nSelectPipe];
