import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
const MarkdownEditor = ({ content }) => {
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
  );
};

export default MarkdownEditor;
