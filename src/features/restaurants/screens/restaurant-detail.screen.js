import React, { useState } from "react";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakFastExpanded, setBreakFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakFastExpanded}
        onPress={() => setBreakFastExpanded(!breakFastExpanded)}
      />
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      />
      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-variant" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      />
    </SafeArea>
  );
};
