-- 추후 테이블이 모두 생성된 후 코드 안에 작성할 예정

ALTER TABLE issues ADD FOREIGN KEY (user_sid) REFERENCES users (sid);
​
ALTER TABLE issues ADD FOREIGN KEY (milestone_id) REFERENCES milestones (id);
​
ALTER TABLE issue_assignees ADD FOREIGN KEY (assignee_id) REFERENCES users (sid);
​
ALTER TABLE issue_assignees ADD FOREIGN KEY (issue_id) REFERENCES issues (id);
​
ALTER TABLE issue_comments ADD FOREIGN KEY (issue_id) REFERENCES issues (id);
​
ALTER TABLE issue_comments ADD FOREIGN KEY (comment_id) REFERENCES comments (id);
​
ALTER TABLE issue_labels ADD FOREIGN KEY (label_name) REFERENCES labels (id);
​
ALTER TABLE issue_labels ADD FOREIGN KEY (issue_id) REFERENCES issues (id);
​
ALTER TABLE comments ADD FOREIGN KEY (writer_id) REFERENCES users (sid);
​
ALTER TABLE comment_emojis ADD FOREIGN KEY (commnet_id) REFERENCES comments (id);
​
ALTER TABLE comment_emojis ADD FOREIGN KEY (user_id) REFERENCES users (sid);
​
ALTER TABLE comment_emojis ADD FOREIGN KEY (emoji_id) REFERENCES emojis (id);