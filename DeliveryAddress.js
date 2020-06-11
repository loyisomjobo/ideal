//Tino Kurimwi @ Motech Fusion 2020/06/09
//iDeal
//tinokurimwi@motech.dev

import React, { Component } from "react";
import styled, { css } from "styled-components";
//import MaterialMapView from "../components/MaterialMapView";
//this above it to be replace with the correct Map
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/dist/MaterialIcons";

// this is the main sceen that you will all be interacting with
function DeliveryAddress(props) {
  return (
    <>
      <IoniconsIcon
        name="ios-arrow-back"
        style={{
          color: "rgba(186,48,255,1)",
          fontSize: 35,
          transform: "rotate(0.7080165533417055deg)",
          marginTop: -526,
          marginLeft: 29
        }}
      ></IoniconsIcon>
      <SetDeliveryAddress>Set Delivery Address</SetDeliveryAddress>
      <Icon2Row>
        <MaterialIconsIcon
          name="my-location"
          style={{
            color: "rgba(186,48,255,1)",
            fontSize: 30
          }}
        ></MaterialIconsIcon>
        <LoremIpsumStack>
          <LoremIpsum>11 Mount Zanetti Str</LoremIpsum>
          <OliesfonteinRd>Oliesfontein Rd</OliesfonteinRd>
        </LoremIpsumStack>
        <IoniconsIcon
          name="ios-arrow-forward"
          style={{
            color: "rgba(186,48,255,1)",
            fontSize: 30,
            marginLeft: 80
          }}
        ></IoniconsIcon>
      </Icon2Row>
      <Rect></Rect>
      <Rect2></Rect2>
      <Rect3></Rect3>
      <LoremIpsum2>
        Can&#39;t find your delivery address? {"\n"}Point it out on our map!
      </LoremIpsum2>
        {/* replace this with the correct view from mapbox*/}
        <MaterialMapView
            style={{
                width: 313,
                    height: 212,
                    marginTop: 381,
                    alignSelf: "center"
            }}
        ></MaterialMapView>
      <Rect4></Rect4>
      <Icon4Row>
        <MaterialIconsIcon
          name="note-add"
          style={{
            color: "rgba(186,48,255,1)",
            fontSize: 30
          }}
        ></MaterialIconsIcon>
        <NoteOnDelivery>Note on delivery</NoteOnDelivery>
      </Icon4Row>
      <Rect5>
        <LoremIpsum3>add a note for the driver</LoremIpsum3>
      </Rect5>
    </>
  );
}

//All these below represent the styling of the relevent component, these are customised components.
// Therefore you won't see the normal <div> but rather varient of it.

const SetDeliveryAddress = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(112,112,112,1);
  font-size: 30px;
  margin-top: 6px;
  margin-left: 28px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(112,112,112,1);
  font-size: 18px;
`;

const OliesfonteinRd = styled.span`
  font-family: Roboto;
  top: 21px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: regular;
  color: rgba(112,112,112,1);
`;

const LoremIpsumStack = styled.div`
  width: 167px;
  height: 38px;
  margin-left: 26px;
  position: relative;
`;

const Icon2Row = styled.div`
  height: 38px;
  flex-direction: row;
  display: flex;
  margin-top: 21px;
  margin-left: 29px;
  margin-right: 31px;
`;

const Rect = styled.div`
  width: 316px;
  height: 1px;
  background-color: #E6E6E6;
  margin-top: 15px;
  margin-left: 29px;
`;

const Rect2 = styled.div`
  width: 316px;
  height: 47px;
  border-radius: 6px;
  border-width: 2px;
  border-color: rgba(230,230,230,1);
  margin-top: 20px;
  margin-left: 29px;
  border-style: solid;
`;

const Rect3 = styled.div`
  width: 316px;
  height: 1px;
  background-color: #E6E6E6;
  margin-top: 21px;
  margin-left: 30px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(112,112,112,1);
  font-size: 17px;
  margin-top: 16px;
  margin-left: 29px;
`;

const Rect4 = styled.div`
  width: 316px;
  height: 1px;
  background-color: #E6E6E6;
  margin-top: 242px;
  margin-left: 30px;
`;

const NoteOnDelivery = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(112,112,112,1);
  font-size: 18px;
  margin-left: 3px;
  margin-top: 4px;
`;

const Icon4Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 17px;
  margin-left: 29px;
  margin-right: 182px;
`;

const Rect5 = styled.div`
  width: 316px;
  height: 88px;
  border-radius: 6px;
  border-width: 1px;
  border-color: rgba(230,230,230,1);
  flex-direction: column;
  display: flex;
  margin-top: 16px;
  margin-left: 29px;
  border-style: solid;
  box-shadow: 1px 5px 4px  0.33px rgba(235,235,235,1) ;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(112,112,112,1);
  margin-top: 13px;
  margin-left: 10px;
`;

export default DeliveryAddress;
