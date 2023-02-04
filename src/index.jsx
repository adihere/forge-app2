// language : javascript

import ForgeUI, { render, Text, Fragment, GlobalPage, Button,SectionMessage,Tabs,Tab } from '@forge/ui';
import api, { route } from "@forge/api";
//import {requestJira} from "@forge/bridge";

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
  console.log("CALLING JIRA - inside function: "); 
  //const response = await api.asUser().requestJira(`https://adihere.atlassian.net/browse/HEL-1?jql=project = HEL`);
  const response = await api.asUser().requestJira(route `/rest/api/3/search?jql=project = HEL`);
  //const response = await api.asUser().requestJira(route `/rest/api/3/events`);
  const issueData = await response.json(); //... extract from response
  
  if (response.status >= 400) {
      //console.error(response.status,response.statusText);
      console.log(`Error Response: ${response.status} ${response.statusText}`);  
  }
  
  else
  {     
  //const callJIRAtext = await response.text;
  console.log(`Successful Response: ${response.status} ${response.statusText}`);  
  console.log("Spitting out JSON: " + await response.json());
  console.log("Spitting out : " + await response.text());
  
  }


};

