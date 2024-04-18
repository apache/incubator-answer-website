import React, {JSX} from 'react';
import {Container} from 'react-bootstrap';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import HeaderSlogan from '../components/HeaderSlogan';


export default function Plugins(): JSX.Element {
    const [] = React.useState([]);
    const list:string[] = ["1.3.0", "1.2.5", "1.2.1", "1.2.0"]
    let table:JSX.Element = list.map((item: string) => {
        return (
            <tr>
                <td>{item}</td>
                <td>[<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-src.tar.gz`}
                    target="_blank" rel="noopener noreferrer">Code</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-src.tar.gz.asc`}
                    target="_blank" rel="noopener noreferrer">Sign</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-src.tar.gz.sha512`}
                    target="_blank" rel="noopener noreferrer">SHA512</a>]
                </td>
                <td>[<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-amd64.tar.gz`}
                    target="_blank" rel="noopener noreferrer">Binary</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-amd64.tar.gz.asc`}
                    target="_blank" rel="noopener noreferrer">Sign</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-amd64.tar.gz.sha512`}
                    target="_blank" rel="noopener noreferrer">SHA512</a>]
                </td>
                <td>[<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-arm64.tar.gz`}
                    target="_blank" rel="noopener noreferrer">Binary</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-arm64.tar.gz.asc`}
                    target="_blank" rel="noopener noreferrer">Sign</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-arm64.tar.gz.sha512`}
                    target="_blank" rel="noopener noreferrer">SHA512</a>]
                </td>
                <td>[<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-amd64.tar.gz`}
                    target="_blank" rel="noopener noreferrer">Binary</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-amd64.tar.gz.asc`}
                    target="_blank" rel="noopener noreferrer">Sign</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-amd64.tar.gz.sha512`}
                    target="_blank" rel="noopener noreferrer">SHA512</a>]
                </td>
                <td>[<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-arm64.tar.gz`}
                    target="_blank" rel="noopener noreferrer">Binary</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-arm64.tar.gz.asc`}
                    target="_blank" rel="noopener noreferrer">Sign</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-arm64.tar.gz.sha512`}
                    target="_blank" rel="noopener noreferrer">SHA512</a>]
                </td>
                <td>[<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-windows-amd64.tar.gz`}
                    target="_blank" rel="noopener noreferrer">Binary</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-windows-amd64.tar.gz.asc`}
                    target="_blank" rel="noopener noreferrer">Sign</a>] [<a
                    href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-windows-amd64.tar.gz.sha512`}
                    target="_blank" rel="noopener noreferrer">SHA512</a>]
                </td>
            </tr>
        )
    })
    return (
        <Layout
            title={translate({message: 'Download'})}
            description="This page provides download links for the latest release of Apache Answer.">
            <HeaderSlogan type="download"/>
            <Container className='py-5'>
                <table>
                    <thead>
                    <tr>
                        <th>version</th>
                        <th>source</th>
                        <th>darwin-amd64</th>
                        <th>darwin-arm64</th>
                        <th>linux-amd64</th>
                        <th>linux-arm64</th>
                        <th>windows-amd64</th>
                    </tr>
                    </thead>
                    <tbody>
                    {table}
                    </tbody>
                </table>
                <div className='mt-5'>
                    <h3> Release Integrity </h3>
                    <p>You can verify the integrity of the downloaded files. </p>
                    <h4>Signatures</h4>
                    <a href="https://answer.apache.org/community/how-to-release/#how-to-verify-the-signatures">How to verify the signatures</a>
                    <h4>Checksums</h4>
                    <a href="https://answer.apache.org/community/how-to-release#how-to-verify-the-checksums">How to verify the checksums</a>
                </div>
            </Container>
        </Layout>
    )
}
