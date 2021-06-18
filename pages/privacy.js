import React, { Component } from 'react'
import Page from "../components/Page";
import InnerPage from "../components/InnerPage";

export default class Home extends Component {
    render() {
        return (
            <Page>
                <>
                    <InnerPage>
                        <>
                            <div className={"lkj"}>
                                kjkjk
                            </div>
                        </>
                    </InnerPage>
                </>
            </Page>
        )
    }
}