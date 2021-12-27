import * as React from 'react'

export interface TextArray {
  text: Text[];
}
interface Text {
  annotations: {
    bold: boolean,
    italic: boolean,
    strikethrough: boolean,
    underline: boolean,
    code: boolean,
    color: string
  },
  href: string | null,
  plain_text: string,
  text: {
    content: string,
    link: string | null
  },
  type: "text"
}

const NotionText = (props: TextArray) => {
  return (
    <>
      {
        props?.text?.map((value: Text) => {
          return (
            <span key={value.text.content}>{value.text.content}</span>
          )
        })
      }
    </>
  );
}

export default NotionText;