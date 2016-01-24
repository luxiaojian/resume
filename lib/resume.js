#! /usr/bin/env node
'use strict';

var log = console.log;
var chalk = require('chalk');
var resume = require('./resume.json');
var basic = resume.basicInfo;
var contact = resume.contact;
var skill = resume.itSkill;

function showBasic() {
  var basicData = basic.data;
  log('');
  log(chalk.green(basic.title));
  log('------------');
  log('')
  log(`${chalk.red('•')} ${basicData.name.val}|${basicData.sex.val}|${basicData.birthday.val}`);
  log(`${chalk.red('•')} ${basicData.record.val}|${basicData.university.val}|${basicData.profession.val}`);
  log(`${chalk.red('•')} ${basicData.weibo.key}: ${basicData.weibo.val}`);
  log(`${chalk.red('•')} ${basicData.blog.key}: ${basicData.blog.val}`);
  log(`${chalk.red('•')} ${basicData.github.key}: ${basicData.github.val}`);
  log(`${chalk.red('•')} ${basicData.work.key}: ${basicData.work.val}`);
  log(`${chalk.red('•')} ${basicData.city.key}: ${basicData.city.val}`);
};

function showContact() {
  var contactData = contact.data;

  log('');
  log(chalk.green(contact.title));
  log('------------');
  log('')
  log(`${chalk.red('•')} ${contactData.mobile.key}: ${contactData.mobile.val}`);
  log(`${chalk.red('•')} ${contactData.email.key}: ${contactData.email.val}`);
  log(`${chalk.red('•')} ${contactData.QQ.key}: ${contactData.QQ.val}`);
}

function showSkill() {
  var skillData = skill.data;

  log('');
  log(chalk.green(skill.title));
  log('------------');
  log('')
  log(`${chalk.red('•')} ${skillData.backend.key}: ${skillData.backend.val}`);
  log(`${chalk.red('•')} ${skillData.frontend.key}: ${skillData.frontend.val}`);
  log(`${chalk.red('•')} ${skillData.buildTool.key}: ${skillData.buildTool.val}`);
  log(`${chalk.red('•')} ${skillData.database.key}: ${skillData.database.val}`);
  log(`${chalk.red('•')} ${skillData.versionControl.key}: ${skillData.versionControl.val}`);
  log(`${chalk.red('•')} ${skillData.designTool.key}: ${skillData.designTool.val}`);
}

module.exports = function(options){
  if(options.basic) {
    showBasic();
  } else if (options.contact) {
    showContact();
  } else if(options.skill) {
    showSkill();
  } else {
    showContact();
    showBasic();
    showSkill();
  }
}