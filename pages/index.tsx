import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getBlocks } from "../lib/notion"
import NotionBlock, {BlockData} from '../components/NotionBlock'
import { Box, IconButton, Flex, Link } from '@chakra-ui/react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import Fuji from '../resources/images/fuji.jpg'
import Navbar from '../components/Navbar';

const pageId = process.env.NOTION_HOME_PAGE_ID || '';

interface Props {
  data: Array<BlockData>
}
const Home = ({data}: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Caulfield</title>
        <meta name="description" content="Alex Caulfield's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Box p={4} display={{ md: 'flex' }}>
          <Box flexShrink={0}>
            <Image 
              width={600}
              height={400}
              src={Fuji}
              alt='Mt Fuji'
              placeholder='blur'
            /> 
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} flexShrink={2}>
            {data.map(block => (
              <Box key={block.id} mb={4}>
                <NotionBlock {...block} />
              </Box>
            ))}
            <Flex justify='center'>
              <Link href='https://linkedin.com/in/alexandercaulfield' isExternal>
                <IconButton
                  aria-label='LinkedIn Profile'
                  as={FaLinkedin}
                  mx={2}
                />
              </Link>
              <Link href='https://github.com/alexcaulfield' isExternal>
                <IconButton
                  aria-label='Github Profile'
                  as={FaGithubSquare}
                  mx={2}
                />
              </Link>
            </Flex>
          </Box>
        </Box>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const block = await getBlocks(pageId);

  return {
    props: {
      data: block
    },
        // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};

export default Home
