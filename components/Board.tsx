import { Canvas, Path, Skia} from '@shopify/react-native-skia';
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const path = Skia.Path.Make();

const Board = () => {

    return(
        <SafeAreaView style={styles.gameBoard}>
            <Canvas style={{flex: 1, width: 200, height: 200}}>
                <Path path={path} />
            </Canvas>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    gameBoard: {
      flex: 1,
    },
  });

export default Board;