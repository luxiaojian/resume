#! /usr/bin/env node

var program = require('commander');
var log = console.log;
var resume = require('../lib/resume.js');

program
  .version('1.0.0')
  .usage('[option] <keyword>')
  .parse(process.argv);

program
  .command('resume')
  .alias('rs')
  .description('查看个人简历！')
  .option('-c, --contact', '联系方式')
  .option('-b, --basic', '个人基本信息')
  .option('-s, --skill', '技能清单')
  .action(function(options) {
    resume(options);
  })

//默认不传参显示帮助
if(!process.argv[2]) {
  program.help();
  log();
}

program.parse(process.argv);
