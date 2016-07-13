'use strict';

const markdownpdf = require("markdown-pdf");

const fs = require("fs");

fs.createReadStream("./cv_rus.md")
    .pipe(markdownpdf())
    .pipe(fs.createWriteStream("./cv_rus.pdf"));