import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './FloatingButton.styles';

interface FloatingButtonProps {
  title: string;
  onPress?: () => void;
  icon?: any;
}

const FloatingButton = ({ title, onPress, icon }: FloatingButtonProps) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <View style={styles.buttonContent}>
        {icon && <Image source={icon} style={styles.buttonIcon} />}
        <Text style={styles.floatingButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FloatingButton;
