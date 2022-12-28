// language : javascript

//import ForgeUI, { render, Text, Fragment, GlobalPage } from '@forge/ui';
import ForgeUI, { render, Text, Fragment, GlobalPage, Button,SectionMessage,Table, Head, Cell,  Row ,Tabs,Tab } from '@forge/ui';

const issues = [
  {
    key: 'XEN-1',
    status: 'In Progress',
  },
  {
    key: 'XEN-2',
    status: 'To Do',
  },
];

const timenow = Date.now();

const App = () => {
  return (
    <Fragment>
      <Text>Hey world 2 again - 27 dec </Text>  
      <Text>{timenow}</Text>      
      <SectionMessage title="Playground" appearance="info">
        <Text>Some text from section</Text>
        <Text>More content from section</Text>
      </SectionMessage>
      
      <Button       
        text = "Click me"
        onClick={ 
          async() => { console.log('clicked me!');} 
      }      
      />

      <Text> more text </Text>   

    <Table>
      <Head>
        <Cell>
          <Text>Issue Key</Text>
        </Cell>
        <Cell>
          <Text>Status</Text>
        </Cell>
      </Head>
      {issues.map(issue => (
        <Row>
          <Cell>
            <Text>{issue.key}</Text>
          </Cell>
          <Cell>
            <Text>{issue.status}</Text>
          </Cell>
        </Row>
      ))}
    </Table>

    <Tabs>
    <Tab label="Tab 1">
        <Text>Hello yo</Text>
    </Tab>
    <Tab label="Tab 2">
        <Text>World again!</Text>
    </Tab>
</Tabs>

    </Fragment>
  );
};

export const run = render(
  <GlobalPage>
    <App/>
  </GlobalPage>
)


