import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 28, 30, 0.8)',
  },
  popup: {
    width: 342,
    padding: 28,
    backgroundColor: '#fff',
    borderRadius: 32,
    alignItems: 'center',
  },
  titleText: {
    color: '#1C1C1E',
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 24,
  },
  subText: {
    color: '#8E8E93',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default styles;
