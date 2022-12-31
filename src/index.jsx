// language : javascript

import ForgeUI, { render, Text, Fragment, GlobalPage, Button,SectionMessage,Tabs,Tab } from '@forge/ui';
import api, { route } from "@forge/api";

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
        text = "Click me to get JIRA "
        onClick = { 
          async() => { await callJIRA();}       
      }      
      />


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

// API call to get JIRA issue
async function callJIRA() {
  const response = async () => {
    await api.asUser().requestJira(route`/rest/api/2/issue/{HEL-1}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
  };
  const callJIRAstatus = await response.json();  
  console.log("CallJIRA status - after call" + callJIRAstatus.key);
}

