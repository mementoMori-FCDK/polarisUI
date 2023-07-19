import './App.css';
import { AppProvider, Button, Page, Box, Card, Icon } from '@shopify/polaris';
import { ArrowLeftMinor, ChevronRightMinor, CartDownMajor, AnalyticsBarStackedMinor, EnableSelectionMinor, BlockquoteMajor, FormsMajor, SectionMajor } from '@shopify/polaris-icons';
import getTextGroup from './TextGroup';
import "@shopify/polaris/build/esm/styles.css"

const pageStyles = {
  width: '80%'
};

const boxStyles = {
  backgroundColor: '#50dca9',
  color: '#0c3b2f',
  borderRadius: '3px',
  textAlign: 'center'
}

function App() {
  return (
    <AppProvider>
      <div className='main'>
        <Page style={pageStyles}>
          <div className="nav-bar">
            <Button size="micro" icon={ArrowLeftMinor} className="icon-button"></Button>
            {getTextGroup("Select a block type", "Select a block type to get started. Then we'll guide you through the process of adding it to your checkout.")}
          </div>
          <div className='body'>
            <div className="card-wrapper">
              <Box style={boxStyles}>Checkout</Box>
            </div>
            <div className="card-wrapper">
              {getTextGroup("Revenue generation", "Increase revenue and boost conversations with these blocks")}
              <Card shadow="md" borderRadius="3" padding="3">
                <div className="cardElement">
                    <Icon source={CartDownMajor} /> 
                    {getTextGroup("Checkout upsell", "Offer your customers one-time offers within checkout. Efforlessly increase your average order value")}
                    <Button icon={ChevronRightMinor} plain></Button>
                </div>
                <div className="cardElement">
                    <Icon source={AnalyticsBarStackedMinor} /> 
                    {getTextGroup("Free shipping upsell", "Entice customers to add a product to their order to receive  free shipping and increase your AOV")}
                    <Button icon={ChevronRightMinor} plain></Button>
                </div>
                <div className="cardElement">
                    <Icon source={EnableSelectionMinor} /> 
                    {getTextGroup("Checkbox upsell", "Offer a free gisft or upsell using a checkbox. Customers can easily add/remove the offer")}
                    <Button icon={ChevronRightMinor} plain></Button>
                </div>
              </Card>
            </div>
            <div className="card-wrapper">
              {getTextGroup("Content", "Display custom fields and content to customers within checkout")}
              <Card shadow="md" borderRadius="3" padding="3">
                <div className="cardElement">
                    <Icon source={FormsMajor} /> 
                    {getTextGroup("Custom field", "Add custom fields to the checkout form and collect additional information from customers")}
                    <Button icon={ChevronRightMinor} plain></Button>
                </div>
                <div className="cardElement">
                    <Icon source={BlockquoteMajor} /> 
                    {getTextGroup("Dynamic content", "Display messages and important infomation to your customers directly inside checkout.")} 
                    <Button icon={ChevronRightMinor} plain></Button>
                </div>
                <div className="cardElement">
                    <Icon source={SectionMajor} /> 
                    {getTextGroup("Line item actions", "Allow customers to adjust their cart directly in checkout. Optionally enable different settings.")}
                    <Button icon={ChevronRightMinor} plain></Button>
                </div>
              </Card>
            </div>
            <div className="card-wrapper">
              {getTextGroup("Validation", "Conditionally block checkout with these blocks.")}
              <Card shadow="md" borderRadius="3" padding="3">
                <div className="cardElement">
                    <Icon source={EnableSelectionMinor} /> 
                    {getTextGroup("Checkbox upsell", "Offer a free gisft or upsell using a checkbox. Customers can easily add/remove the offer")}
                    <Button icon={ChevronRightMinor} plain></Button>
                </div>
              </Card>
            </div>
            <div className="card-wrepper">
              {getTextGroup("Don't see what you're looking for?")}
              <Button fullWidth size="medium"> Request a block type</Button>
            </div>
          </div>
        </Page>
      </div>
    </AppProvider>
  );
}

export default App;
