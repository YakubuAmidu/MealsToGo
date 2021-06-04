import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../components/safe-area-component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { Favourites } = useContext(FavouritesContext);
  const { restaurants } = useContext(RestaurantContext);

  return Favourites.length ? (
    <SafeArea>
      <RestaurantList>
        data={restaurants}
        renderItem=
        {({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        />
      </RestaurantList>
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No Favourites yet</Text>
    </NoFavouritesArea>
  );
};
