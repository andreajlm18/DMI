import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  // Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

// const isAndroid = Platform.OS === "android";
const AreaView = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <>
      <AreaView>
        <SearchView>
          <Searchbar />
        </SearchView>
        <ListView>
          <RestaurantInfoCard />
        </ListView>
      </AreaView>
    </>
  );
};
