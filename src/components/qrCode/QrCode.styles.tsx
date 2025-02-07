import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  qrContainer: {
    position: 'relative',
    width: 258,
    height: 258,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrImageWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrImageExpired: {
    opacity: 0.05,
  },
  refreshButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    transform: [{ translateX: -36 }, { translateY: -60 }],
    shadowColor: '#1C1C1E1A',
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 16,
    elevation: 4,
  },
  refreshIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default styles;
