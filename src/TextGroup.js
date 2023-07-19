import React from "react";
import { Text } from '@shopify/polaris';

function getTextGroup(text1, text2) {
    return (
        <div className="text-group">
          <Text variant="headingSm" as="h6">{text1}</Text>
          <Text variant="bodySm" as="p">{text2}</Text>
        </div>
    );
}
  
export default getTextGroup;