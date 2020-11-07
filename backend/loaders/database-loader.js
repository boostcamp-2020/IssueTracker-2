const db = require('../db');

const SQL_DROP_USER_TABLE = `DROP TABLE IF EXISTS users;`;
const SQL_CREATE_USER_TABLE = `  
    CREATE TABLE users (
        sid int PRIMARY KEY AUTO_INCREMENT,
        nickname varchar(255),
        profile_image_url varchar(255),
        password varchar(255)
    );`;

const SQL_DROP_ISSUE_TABLE = `DROP TABLE IF EXISTS issues;`;
const SQL_CREATE_ISSUE_TABLE = `
    CREATE TABLE issues (
        id int PRIMARY KEY AUTO_INCREMENT,
        user_sid int,
        issue_content varchar(255),
        issue_name varchar(255),
        created_at timestamp,
        milestone_name varchar(255),
        milestone_id int,
        issue_status varchar(255)
    );`;

const SQL_DROP_ISSUE_ASSIGNEE_TABLE = `DROP TABLE IF EXISTS issue_assignees;`;
const SQL_CREATE_ISSUE_ASSIGNEE_TABLE = `
    CREATE TABLE issue_assignees (
        id int PRIMARY KEY AUTO_INCREMENT,
        assignee_id int,
        issue_id int
    );`;

const SQL_DROP_ISSUE_COMMENT_TABLE = `DROP TABLE IF EXISTS issue_comments;`;
const SQL_CREATE_ISSUE_COMMENT_TABLE = `
    CREATE TABLE issue_comments (
        id int PRIMARY KEY AUTO_INCREMENT,
        issue_id int,
        comment_id int
    );`;

const SQL_DROP_MILESTONE_TABLE = `DROP TABLE IF EXISTS milestones`;
const SQL_CREATE_MILESTONE_TABLE = `
    CREATE TABLE milestones (
        id int PRIMARY KEY,
        milestone_name varchar(255),
        milestone_description varchar(255),
        end_date datetime
    );`;

const SQL_DROP_LABEL_TABLE = `DROP TABLE IF EXISTS labels`;
const SQL_CREATE_LABEL_TABLE = `
    CREATE TABLE labels (
        id int PRIMARY KEY,
        label_name varchar(255),
        color varchar(255),
        label_description varchar(255)
    );`;

const SQL_DROP_ISSUE_LABEL_TABLE = `DROP TABLE IF EXISTS issue_labels`;
const SQL_CREATE_ISSUE_LABEL_TABLE = `
    CREATE TABLE issue_labels (
        id int PRIMARY KEY,
        label_name int,
        issue_id int
    );`;

const SQL_DROP_COMMENT_TABLE = `DROP TABLE IF EXISTS comments`;
const SQL_CREATE_COMMNET_TABLE = `
    CREATE TABLE comments (
        id int PRIMARY KEY AUTO_INCREMENT,
        writer_id int,
        description varchar(255),
        created_at datetime
    );`;

const SQL_DROP_EMOJI_TABLE = `DROP TABLE IF EXISTS emojis`;
const SQL_CREATE_EMOJI_TABLE = `
    CREATE TABLE emojis (
        id int PRIMARY KEY AUTO_INCREMENT,
        unicode varchar(255)
    );`;

const SQL_DROP_COMMENT_EMOJI_TABLE = `DROP TABLE IF EXISTS comment_emojis`;
const SQL_CREATE_COMMNET_EMOJI_TABLE = `
    CREATE TABLE comment_emojis (
        id int PRIMARY KEY AUTO_INCREMENT,
        commnet_id int,
        user_id int,
        emoji_id int
    );`;

const createUserTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_USER_TABLE)
      .then(() => connection.query(SQL_CREATE_USER_TABLE))
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

createUserTable();
