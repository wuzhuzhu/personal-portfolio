import { Box, Grid, Tabs, Tab, TabList, TabPanel, TabPanels, Card, CardHeader, Heading, Text, Divider, CardBody } from "@chakra-ui/react"

const IndexPage = () => {
  return (
    <Box m={20}>
      <Tabs>
        <TabList>
          <Tab>消费记录</Tab>
          <Tab>积分记录</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid templateColumns='repeat(3,1fr)' gap='8'>
              <Card align='center' shadow='lg' mt='20' size='md'>
                <CardHeader textAlign='center'>
                  <Heading size='md' mb='2'> 赠送项目</Heading>
                  <Divider size='xl' mb='2' colorScheme='blackAlpha' />
                  <Heading size='xl' mb='3'> 19980</Heading>
                  <Text>元</Text>
                </CardHeader>
                <CardBody textAlign='center'>
                  <Text>[13周年]外泌体/次</Text>
                  <Text>悦色美甲美睫（太阳宫店）</Text>
                  <Text mt='4' fontSize='md' color='gray.400'>2022-10-16 - 2023-10-15</Text>
                </CardBody>




              </Card>
            </Grid>

          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box >
  )
}

export default IndexPage
