import React from 'react'
import { Page, Layout } from '@shopify/polaris';

export const BaseLayout = ({ children }) => {
    const divStyle = {
        maxWidth: '600px',
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
      };

    return (
        <Page className="App" fullWidth>
            <Layout>
                <div style={divStyle}>
                { children }
                </div>
            </Layout>
        </Page>
    )
}
