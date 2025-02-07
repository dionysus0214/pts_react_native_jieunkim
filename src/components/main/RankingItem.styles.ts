import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rankItem: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 8,
  },
  rankContainer: {
    width: 32,
    alignItems: 'center',
  },
  rankText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1C1C1E',
  },
  rankIcon: {
    width: 28,
    height: 38,
    resizeMode: 'contain',
  },
  nameText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 500,
    color: '#1C1C1E',
    marginLeft: 80,
  },
  timeText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#505050',
  },
});

export default styles;
