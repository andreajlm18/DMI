import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 16px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  display: flex;
  flex-direction: row;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some nice restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_640.jpg",
    ],
    address = "Some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarly,
  } = restaurant;
  const ratingArray = Array.from(new Array(rating));
  return (
    <RestaurantCard>
      <RestaurantCardCover elavation={5} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
