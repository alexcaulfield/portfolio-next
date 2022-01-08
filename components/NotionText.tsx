import * as React from 'react'
import { Link } from '@chakra-ui/react';

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
    link: {
      url: string | undefined;
    }
  },
  type: "text"
}

const NotionText = (props: TextArray) => {
  return (
    <>
      {
        props?.text?.map(({text}: Text) => (
          <span key={text.content}>
            {text.link ? <Link href={text.link.url} isExternal color='teal.500'>{text.content}</Link>: text.content}
          </span>
        ))
      }
    </>
  );
}

export default NotionText;