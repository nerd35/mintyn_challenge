import React from 'react';
import { CardChardImg, CardColumn, CardContainer, CardDiv, CardDivColumn, CardSubTitle, CardTitle } from './card.element';
import CardChart from '../../assets/small chart.png'

const Card = () => {
  return (
    <CardContainer>
      <CardColumn>
          <CardDiv>
          <CardDivColumn>

              <CardTitle>Daily Transaction Volume</CardTitle>
              <CardSubTitle>2,342</CardSubTitle>
          </CardDivColumn>
          <CardDivColumn>
              <CardChardImg src={CardChart} alt="chart" />
          </CardDivColumn>
          </CardDiv>
      </CardColumn>
      <CardColumn>
      <CardDiv>
          <CardDivColumn>

              <CardTitle>Daily Transaction Value</CardTitle>
              <CardSubTitle>₦4,000,000</CardSubTitle>
          </CardDivColumn>
          <CardDivColumn>
              <CardChardImg src={CardChart} alt="chart" />
          </CardDivColumn>
          </CardDiv>
      </CardColumn>
      <CardColumn>
      <CardDiv>
          <CardDivColumn>

              <CardTitle>Total Transaction Volume</CardTitle>
              <CardSubTitle>452,000</CardSubTitle>
          </CardDivColumn>
          <CardDivColumn>
              <CardChardImg src={CardChart} alt="chart" />
          </CardDivColumn>
          </CardDiv>
      </CardColumn>
      <CardColumn>
      <CardDiv>
          <CardDivColumn>

              <CardTitle>Total Transaction Value</CardTitle>
              <CardSubTitle>₦4,000,000</CardSubTitle>
          </CardDivColumn>
          <CardDivColumn>
              <CardChardImg src={CardChart} alt="chart" />
          </CardDivColumn>
          </CardDiv>
      </CardColumn>
    </CardContainer>
  );
}

export default Card;
