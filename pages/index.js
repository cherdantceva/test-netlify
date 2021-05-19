import Head from "next/head"
import { Component } from 'react'
import { attributes} from '../content/home.md';

import HomeTop from "../components/HomeTop";
export default class Home extends Component {
    render() {
        let {title, content, features} = attributes;
        console.log(attributes)
        return (
            <>
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <HomeTop
                    title={title}
                    content={content}
                />
                <div className={'features'}>
                    <div className={'items'}>
                        {features.map((item) => (
                            <div key={item.name}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

