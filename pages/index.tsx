import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getBlocks } from "../lib/notion";
import NotionBlock, {BlockData} from '../components/NotionBlock';
import { Stack, HStack, Box } from '@chakra-ui/react'
import Fuji from '../resources/images/fuji.jpg';
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
        <HStack spacing={6}>
          <Box p={5} flex='1'>
            <Image 
              width={600}
              height={400}
              src={Fuji} 
              layout='responsive' 
              alt='Mt Fuji'
              placeholder='blur'
            /> 
          </Box>
          <Box p={5} flex='1'>
            <Stack spacing={4}>
              {data.map(block => <NotionBlock key={block.id} {...block} />)}
            </Stack>
          </Box>
        </HStack>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
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
