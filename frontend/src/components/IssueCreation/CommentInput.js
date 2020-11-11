import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default ({ tabType, setContent, content }) => {
  const onChange = e => {
    setContent(e.target.value);
  };

  const InlineCodeBlock = props => {
    return <span style={{ fontWeight: 'bold' }}>{props.value}</span>;
  };

  const BlockQuoteBlock = props => {
    return (
      <div
        style={{
          border: '1px dashed #aaa',
          borderRadius: 10,
          paddingLeft: 10,
          margin: 5,
        }}
      >
        {props.children}
      </div>
    );
  };

  const CodeBlock = props => {
    return (
      <pre style={{ background: 'rgba(0,0,0,0.1)', padding: 10 }}>
        <code>{props.value}</code>
      </pre>
    );
  };

  const TableCellBlock = props => {
    let style = {
      textAlign: props.align ? props.align : 'center',
      padding: 5,
    };

    if (props.isHeader) {
      style.background = 'rgba(0,0,0,0.1)';
      style.border = '1ps solid #ccc';
      style.borderLeft = 0;
      style.borderRight = 0;
    } else {
      style.borderLeft = '1px solid #eee';
      style.borderRight = '1px solid #eee';
      style.borderBottom = '1px solid #eee';
    }

    return <td style={style}>{props.children}</td>;
  };
  return (
    <>
      {tabType === 'write' && (
        <Input
          placeholder="Leave a comment"
          value={content}
          onChange={onChange}
        />
      )}
      {tabType === 'preview' && (
        <MarkdownContent>
          <ReactMarkdown
            plugins={[gfm]}
            source={content}
            skipHtml={false}
            allowDangerousHtml
            renderers={{
              code: CodeBlock,
              tableCell: TableCellBlock,
              inlineCode: InlineCodeBlock,
              blockquote: BlockQuoteBlock,
            }}
          />
        </MarkdownContent>
      )}
    </>
  );
};

const Input = styled.textarea`
  height: 100%;
  padding: 8px 12px;
  margin: 8px;
  margin-bottom: -3px;
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-bottom: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  outline: none;
  font-size: 14px;
  background-color: #f6f8fa;
`;

const MarkdownContent = styled.div`
  height: 100%;
  padding: 8px 12px;
  margin: 8px;
  margin-bottom: -3px;
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-bottom: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  outline: none;
  font-size: 14px;
  background-color: white;
  overflow-y: scroll;
`;
