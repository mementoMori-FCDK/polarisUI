import './App.css';
import { AppProvider, Button, Page, Box, Card, Icon, Text, Layout } from '@shopify/polaris';
import { ChevronRightMinor, CartDownMajor, AnalyticsBarStackedMinor, EnableSelectionMinor, BlockquoteMajor, FormsMajor, SectionMajor } from '@shopify/polaris-icons';
import getTextGroup from './TextGroup';
import "@shopify/polaris/build/esm/styles.css"

const boxStyles = {
  backgroundColor: 'var(--p-color-bg-success)',
  color: 'var(--p-color-bg-primary-active)',
  borderRadius: '3px',
  textAlign: 'center',
}

function App() {
  return (
    <AppProvider>
      <div className='main'>
        <Page title="Select a block type" subtitle="Select a block type to get started. Then we'll guide you through the process of adding it to your checkout." backAction={{
          content: 'Back',
          onClick: console.log('back-action'),
        }}>
          <Layout>
            <div className='body'>
              <div className="card-wrapper">
                <Box style={boxStyles}>
                  <Text variant='headingXs' fontWeight='bold'>Checkout</Text>
                </Box>
              </div>
              <div className="card-wrapper">
                {getTextGroup("Revenue generation", "Increase revenue and boost conversations with these blocks")}
                <Card shadow="md" borderRadius="3" padding="3">
                  <div className="cardElement">
                      <Icon source={CartDownMajor} className="card-icon"/> 
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
                {getTextGroup("Don't see what you're looking for?", "We are always open to new blocks & templates. If you have an idea, reach out!")}
                <Button fullWidth size="medium"> Request a block type</Button>
              </div>
            </div>
          </Layout>
          
        </Page>
      </div>
    </AppProvider>
  );
}

export default App;
