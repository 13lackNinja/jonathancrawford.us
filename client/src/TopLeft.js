import React from 'react';
import styled from 'styled-components';

import './styles/TopLeft.css'

import logoImage from './images/logo.svg'

const Table = styled.table`
  border-spacing: 5px;

  .date {
    width: 70px;
  }
`

const Row = styled.tr`

`

const Link = styled.a`
  text-decoration: none;
  color: #dfdbdb;
  font-family: 'Myriad Pro';
  font-size: 15px;
  text-transform: uppercase;
  opacity: .7;
  transition: opacity .5s;
  letter-spacing: 1px;

  ${Row}:hover & {
    opacity: 1;
  }
`

const TopLeft = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const homeLogo = document.getElementById('home-logo');
    const simple = document.getElementById('simple');

    homeLogo.addEventListener('click', () => {
      simple.scrollIntoView({ behavior: 'smooth' });
    });
  });

  return (
    <nav id="topleft">
      <img src={logoImage} alt='logo.svg' id="home-logo"/>
      <Table>
        <tbody>
          <Row>
            <td className="date">
              <Link href="https://fanlink.to/jc-simple">9.27.18</Link>
            </td>
            <td>
              <Link href="https://fanlink.to/jc-simple">Simple</Link>
            </td>
          </Row>
          <Row>
            <td className="date">
              <Link href="https://fanlink.to/depths">8.10.17</Link>
            </td>
            <td>
              <Link href="https://fanlink.to/depths">Depths</Link>
            </td>
          </Row>
        </tbody>
      </Table>
    </nav>
  )
}

export default TopLeft
