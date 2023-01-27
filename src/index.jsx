// language : javascript

import ForgeUI, { render, Text, Fragment, GlobalPage, Button,SectionMessage,Tabs,Tab } from '@forge/ui';
import api, { route } from "@forge/api";
import fetch from 'node-fetch';
//import {requestJira} from "@forge/bridge";

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
console.log('Starting ::: forge-react-issues ::::');
      console.log('Starting :' + timenow);

const App = () => {
  return (
    <Fragment>
      <Text>Hey world 2 again - 11 jan 2023 </Text>  
      <Text>{timenow.Date}</Text>      
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
          <Text id= "tab2"> World again!</Text>
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
  console.log("CALLING JIRA - inside function: ");   
  //const response = await api.asUser().requestJira(route `/rest/api/3/search?jql=project = HEL`);

  fetch( `https://adihere.atlassian.net/jira/rest/api/3/search?jql=project = HEL`)
  .then ( response => {
    console.log('INSIDE FETCH THEN');
  })}