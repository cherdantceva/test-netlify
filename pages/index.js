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
                    <div className={'items'}>
                        {features.items.map((item) => (
                            <div key={item.name}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'grid'}>
                    <div className={'card'}>
                        <form name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" />
                            </p>
                            <p>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message"></textarea>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

