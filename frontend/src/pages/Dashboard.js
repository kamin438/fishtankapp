import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Layout, Card, Icon, Stack, Banner } from '@shopify/polaris';
import { NatureMajor } from '@shopify/polaris-icons';
import { BaseLayout } from '../layouts/BaseLayout';

function Dashboard() {
    const baseURL = "/dashboard";
    const [isLoading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          setLoading(false);
        });
      }, []);


    if (isLoading) {
        return <div className="App">Loading...</div>;
      }
        
    return (
        <BaseLayout>
            <Layout.Section>
                <Card title="Fish tank summary" sectioned>
                    <p>View a summary of your fish tank performance.</p>
                    <br/> 
                    <div>
                        <Stack>
                            <Icon source={NatureMajor} color="primary" />
                            {post && <p>{post.temp}</p>}
                        </Stack> 
                    </div>
                    <br/>
                    {post && <Banner
                        title={post.alert}
                        status="warning"
                    />}
                    
                </Card>
            </Layout.Section>
        </BaseLayout>
    );
}

export default Dashboard;