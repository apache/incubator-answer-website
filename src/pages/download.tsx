import React, {JSX} from 'react';
import {Container} from 'react-bootstrap';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import HeaderSlogan from '../components/HeaderSlogan';


export default function Plugins(): JSX.Element {
  let item = "1.3.6";
  return (
    <Layout
      title={translate({message: 'Download'})}
      description="This page provides download links for the latest release of Apache Answer.">
      <HeaderSlogan type="download"/>
      <Container className='py-5'>
        <h3>The Latest Release</h3>
        <br />
        <table>
          <thead>
            <tr>
              <th>Version</th>
              <th>Date</th>
              <th>Download</th>
              <th>Release Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item}</td>
              <td>2024-08-05</td>
              <td>
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-src.tar.gz`}
            target="_blank" rel="noopener noreferrer">apache-answer-{item}-incubating-src.tar.gz</a> (<a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-src.tar.gz.asc`}
            target="_blank" rel="noopener noreferrer">SIGN</a>, <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-src.tar.gz.sha512`}
            target="_blank" rel="noopener noreferrer">SHA512</a>)
                  </li>
                  <li>
                    <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-arm64.tar.gz`}
            target="_blank" rel="noopener noreferrer">apache-answer-{item}-incubating-bin-darwin-arm64.tar.gz</a> (<a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-arm64.tar.gz.asc`}
            target="_blank" rel="noopener noreferrer">SIGN</a>, <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-darwin-arm64.tar.gz.sha512`}
            target="_blank" rel="noopener noreferrer">SHA512</a>)
                  </li>
                  <li>
                    <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-amd64.tar.gz`}
            target="_blank" rel="noopener noreferrer">apache-answer-{item}-incubating-bin-linux-amd64.tar.gz</a> (<a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-amd64.tar.gz.asc`}
            target="_blank" rel="noopener noreferrer">SIGN</a>, <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-amd64.tar.gz.sha512`}
            target="_blank" rel="noopener noreferrer">SHA512</a>)
                  </li>
                  <li>
                    <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-arm64.tar.gz`}
            target="_blank" rel="noopener noreferrer">apache-answer-{item}-incubating-bin-linux-arm64.tar.gz</a> (<a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-arm64.tar.gz.asc`}
            target="_blank" rel="noopener noreferrer">SIGN</a>, <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-linux-arm64.tar.gz.sha512`}
            target="_blank" rel="noopener noreferrer">SHA512</a>)
                  </li>
                  <li>
                    <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-windows-amd64.tar.gz`}
            target="_blank" rel="noopener noreferrer">apache-answer-{item}-incubating-bin-windows-amd64.tar.gz</a> (<a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-windows-amd64.tar.gz.asc`}
            target="_blank" rel="noopener noreferrer">SIGN</a>, <a
            href={`https://downloads.apache.org/incubator/answer/${item}-incubating/apache-answer-${item}-incubating-bin-windows-amd64.tar.gz.sha512`}
            target="_blank" rel="noopener noreferrer">SHA512</a>)
                  </li>
                </ul>
              </td>
              <td><a href={`https://github.com/apache/incubator-answer/releases/tag/v${item}`}>Release Notes</a></td>
            </tr>
          </tbody>
        </table>
        <div className='mt-5'>
          <h3>All Archived Releases</h3>
          <p>For older releases, please check the <a target="_blank" rel="noopener noreferrer" href="https://archive.apache.org/dist/incubator/answer/">archive</a>.</p>
        </div>
        <div className='mt-5'>
          <h3>Release Integrity</h3>
          <p>You can verify the integrity of the downloaded files. </p>
          <ul>
            <li>
              <a href="https://answer.apache.org/community/how-to-release/#how-to-verify-the-signatures">How to verify the signatures</a>
            </li>
            <li>
              <a href="https://answer.apache.org/community/how-to-release/#how-to-verify-the-checksums">How to verify the checksums</a>
            </li>
          </ul>
        </div>
        <div className='mt-5'>
          <h3>Release Docker Image</h3>
          <p>Apache Answer provides a docker image for each release. You can pull the image from the <a href="https://hub.docker.com/r/apache/answer/tags" target="_blank" rel="noopener noreferrer">Docker Hub</a>.</p>
        </div>
      </Container>
    </Layout>
  )
}
