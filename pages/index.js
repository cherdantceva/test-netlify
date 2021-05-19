import Head from "next/head"
import { Component } from 'react'
import { attributes} from '../content/home.md';

import HomeTop from "../components/HomeTop";
export default class Home extends Component {
    render() {
        let {top, features} = attributes;
        console.log(attributes)
        return (
            <>
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <HomeTop
                    title={top.title}
                    content={top.content}
                />
                <div className={'features'}>
                    <h2>{features.title}</h2>
                    <div className={'items'}>
                        {features.items.map((item) => (
                            <div key={item.title}>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

