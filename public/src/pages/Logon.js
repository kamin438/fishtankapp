import React from 'react';
import { Page, Layout, Card } from '@shopify/polaris';

function Logon(props) {
    return (
        <Page className="App" fullWidth>
            <Layout>
                <Layout.Section>
                <Card title="Online store dashboard" sectioned>
                    <p>View a summary of your online store’s performance.</p>
                </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}

export default Logon;


