// language : javascript

import ForgeUI, { render, Text, Fragment, GlobalPage, Button,SectionMessage,Tabs,Tab } from '@forge/ui';
import api, { route } from "@forge/api";
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

    // Define recursive function to print nested values
    function printValues(obj) {
      for(var k in obj) {
          if(obj[k] instanceof Object) {
              printValues(obj[k]);
          } else {
              console.log(obj[k] + "\n");
          };
      }
    };


// Define recursive function to print nested values - diff implementation 
function printValues2(jsonString) { 
  let res = [];
  const inputObject = JSON.parse(jsonString);
  Object.keys(inputObject).forEach(key => {
    const value = inputObject[key];
    if (typeof value === 'object') {
      res.push(printValues2(JSON.stringify(value)));
      
    } else {
      res.push(value);
      console.log(JSON.stringify(value));
    }
  });
  return res;
}

// API call to get JIRA issue
async function callJIRA() {
  console.log("CALLING JIRA - inside function: ");   
  const response = await api.asUser().requestJira(route `/rest/api/3/search?jql=project = HEL`);
  const issueDataJSON = await response.json(); //... extract from response
  
  if (response.status >= 400) {
      //console.error(response.status,response.statusText);
      console.log(`Error Response: ${response.status} ${response.statusText}`);  
  }
  
  else
  {     
    //const callJIRAtext = await response.text;
    console.log(`Successful Response: ${response.status} ${response.statusText}`);      
    console.log("Spitting out JSON: \n" + issueDataJSON +"\n");
    //console.log(issueDataJSON.issues.map(function(issue) {return issue.key}));
    //objJSON = JSON.parse(issueDataJSON);
    
    printValues2(issueDataJSON);

 }
}
