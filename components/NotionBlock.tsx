import * as React from 'react'
import type {TextArray} from './NotionText';
import NotionText from './NotionText';
import { Heading, Text } from '@chakra-ui/react'

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
        <Text fontSize='lg'>
          <NotionText {...data} />
        </Text>
      )
    case NotionBlockTypes.h1:
      data = props[NotionBlockTypes.h1] as unknown as TextArray;
      return (
        <Heading as='h1' size='xl'>
          <NotionText {...data} />
        </Heading>
      )
    case NotionBlockTypes.h2:
      data = props[NotionBlockTypes.h2] as unknown as TextArray;
      return (
        <Heading as='h2' size='lg'>
          <NotionText {...data} />
        </Heading>
      )
    case NotionBlockTypes.h3:
      data = props[NotionBlockTypes.h3] as unknown as TextArray;
      return (
        <Heading as='h3' size='md'>
          <NotionText {...data} />
        </Heading>
      )
    default:
      return null;
  }
}

export default NotionBlock;