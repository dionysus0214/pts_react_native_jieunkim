import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  floatingButton: {
    minWidth: 52,
    height: 52,
    borderWidth: 1,
    borderColor: 'rgba(134, 71, 240, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  floatingButtonText: {
    color: 'rgba(28, 28, 30, 1)',
    fontSize: 14,
    fontWeight: 700,
  },
});

export default styles;
