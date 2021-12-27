import * as React from 'react'
import type {TextArray} from './NotionText';
import NotionText from './NotionText';

enum NotionBlockTypes {
  p = 'paragraph',
  h1 = 'heading_1',
  h2 = 'heading_2',
  h3 = 'heading_3',
}

type BlockName = {
  [key in NotionBlockTypes]?: TextArray
}
export interface BlockData {
  type: NotionBlockTypes;
  text: string;
  id: string;
}

type Props = BlockData & BlockName;

const NotionBlock = (props: Props) => {
  let data = null;
  switch (props.type) {
    case NotionBlockTypes.p:
      data = props[NotionBlockTypes.p] as unknown as TextArray;
      return (
        <p>
          <NotionText {...data} />
        </p>
      )
    case NotionBlockTypes.h1:
      data = props[NotionBlockTypes.h1] as unknown as TextArray;
      return (
        <h1>
          <NotionText {...data} />
        </h1>
      )
    case NotionBlockTypes.h2:
      data = props[NotionBlockTypes.h2] as unknown as TextArray;
      return (
        <h2>
          <NotionText {...data} />
        </h2>
      )
    case NotionBlockTypes.h3:
      data = props[NotionBlockTypes.h3] as unknown as TextArray;
      return (
        <h3>
          <NotionText {...data} />
        </h3>
      )
    default:
      return null;
  }
}

export default NotionBlock;