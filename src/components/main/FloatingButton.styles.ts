import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  floatingButton: {
    minWidth: 52,
    height: 52,
    borderWidth: 1,
    borderColor: '#8647F0',
    backgroundColor: '#FFF',
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 12,
    shadowColor: '#00000014',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
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
    // color: '#000000',
    fontSize: 14,
    fontWeight: 700,
  },
});

export default styles;
