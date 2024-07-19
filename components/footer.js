import { Box ,Link} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Box >
      &copy; {new Date().getFullYear()} Shuai.Yin All Rights Reserved.
      </Box>
      <Link href="https://beian.miit.gov.cn/" target="_blank">
        湘ICP备19002868号-1
      </Link>
    </Box>
    
  )
}

export default Footer
